import { Sidebar } from '@/components/Sidebar';
import { ToastProvider } from '@/components/Toast';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import styles from './app.module.css';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${montserrat.className} ${styles.body}`}>
        <ToastProvider>
          <Sidebar />
          <div className={styles.main}>
            <Component {...pageProps} />
          </div>
        </ToastProvider>
      </main>
    </>
  );
}
