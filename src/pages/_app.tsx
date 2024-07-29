import { Sidebar } from '@/components/Sidebar';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import styles from './app.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${inter.className} ${styles.body}`}>
        <Sidebar />
        <div className={styles.main}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
