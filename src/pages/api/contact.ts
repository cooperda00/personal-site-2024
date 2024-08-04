import rateLimit from '@/lib/rateLimit';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerClient } from 'postmark';
import { z } from 'zod';

const emailClient = new ServerClient(process.env.POSTMARK_API_KEY ?? '');

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const BodySchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  phoneNumber: z.string().max(0), // Honeypot field
});

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await limiter.check(res, 5, 'CONTACT'); // 5 requests a minute
  } catch (error) {
    res.status(429).json({ message: 'Too many requests' });
  }

  try {
    const body = BodySchema.parse(req.body);

    // If honeypot is filled, silently reject but respond as if successful
    if (body.phoneNumber !== '') {
      return res.status(200).json({ message: 'Success' });
    }

    const { phoneNumber, ...safeBody } = body;

    await emailClient.sendEmail({
      From: 'info@danielcooper.io',
      To: 'info@danielcooper.io',
      Subject: 'You received a contact form submission',
      TextBody: `
      From : ${safeBody.name}
      Email : ${safeBody.email}
      Message : 
      ${safeBody.message}
      `,
    });

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: 'Invalid input: ' + error.errors.map((e) => e.message).join(', ') });
    }

    res.status(400).json({ message: 'Invalid request' });
  }
}
