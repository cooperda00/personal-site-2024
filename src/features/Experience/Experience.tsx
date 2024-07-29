import ReactMarkdown from 'react-markdown';
import styles from './Experience.module.css';
import { ExperienceMarkdown } from './types';

type Props = {
  experience: ExperienceMarkdown[];
};

export const Experience = ({ experience }: Props) => {
  return (
    <section id="experience" className={styles.experience}>
      {experience.map((exp, i) => (
        <ReactMarkdown key={i}>{exp.md}</ReactMarkdown>
      ))}
    </section>
  );
};
