import { formatDate } from '@/lib';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import styles from './Experience.module.css';
import { ExperienceMarkdown } from './types';

type Props = {
  experience: ExperienceMarkdown;
};

export const ExperienceCard = ({
  experience: {
    md,
    frontmatter: { endDate, imagePath, role, startDate, title, url },
  },
}: Props) => {
  return (
    <div className={styles.experienceCard}>
      <Image src={imagePath} alt={title} width={100} height={100} />

      <div>
        <h2>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </h2>

        <p className={styles.role}>
          {role}
          <em>
            {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
          </em>
        </p>

        <ReactMarkdown
          components={{
            a(props) {
              return (
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                  {props.children}
                </a>
              );
            },
          }}
        >
          {md}
        </ReactMarkdown>
      </div>
    </div>
  );
};
