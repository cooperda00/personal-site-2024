import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content} id="home">
        <Contact />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}
