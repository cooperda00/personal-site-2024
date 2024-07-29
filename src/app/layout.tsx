import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Cooper, Full Stack Developer',
  description:
    'Full-stack developer with over 4 years of experience in dynamic startup environments, well-versed in the modern TypeScript ecosystem. Proven track record of delivering complete, high-quality features and improving usability. Quickly adopts and leverages new technologies to create performant, responsive, and accessible web applications. Experienced in working in cross-functional teams and effective at communicating with both technical and non-technical stakeholders.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
