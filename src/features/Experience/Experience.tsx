import styles from './Experience.module.css';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceMarkdown } from './types';

type Props = {
  experience: ExperienceMarkdown[];
};

export const Experience = ({ experience }: Props) => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Professional Experience</h2>

      <p>
        With over 5 years in software development, I&apos;ve worked in various roles at innovative
        startups, building scalable SaaS products, CRM systems, and weather risk management
        platforms.
      </p>

      <p>
        I&apos;m passionate about creating efficient, user-friendly applications, optimizing
        development processes, championing accessibility, and delivering high-quality code. As a
        full stack developer, I bring a collaborative spirit and a keen eye for user experience to
        every project.
      </p>

      <div className={styles.experienceContainer}>
        {experience.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
      </div>
    </section>
  );
};
