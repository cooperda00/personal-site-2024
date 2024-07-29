import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { TechnicalSkills } from '@/components/TechnicalSkills';
import Head from 'next/head';
import styles from './app.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Cooper, Full Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer with over 4 years of experience in dynamic startup environments, well-versed in the modern TypeScript ecosystem. Proven track record of delivering complete, high-quality features and improving usability. Quickly adopts and leverages new technologies to create performant, responsive, and accessible web applications. Experienced in working in cross-functional teams and effective at communicating with both technical and non-technical stakeholders."
        />
      </Head>

      <div className={styles.content} id="home">
        <Contact />
        <TechnicalSkills />
        <Experience />
      </div>
    </>
  );
}
