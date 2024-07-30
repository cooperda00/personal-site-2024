import { Metadata } from '@/components/Metadata';
import { Contact } from '@/features/Contact';
import { Experience } from '@/features/Experience';
import { loadExperience } from '@/features/Experience/helpers';
import { ExperienceMarkdown } from '@/features/Experience/types';
import { TechnicalSkills } from '@/features/TechnicalSkills';
import styles from './app.module.css';

type Props = {
  experience: ExperienceMarkdown[];
};

export default function Home({ experience }: Props) {
  return (
    <>
      <Metadata />
      <div className={styles.content} id="home">
        <Experience experience={experience} />
        <TechnicalSkills />
        <Contact />
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const experience = loadExperience();

  return {
    props: {
      experience,
    },
  };
};
