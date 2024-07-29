import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const BodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type Body = z.infer<typeof BodySchema>;

type ResponseData = {
  message: string;
  body?: Body;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const body = BodySchema.parse(req.body);

    // TODO : email myself with the information using a service like sendgrid

    res.status(200).json({ message: 'Success', body });
  } catch (error) {
    res.status(400).json({ message: 'Invalid request' });
  }
}
