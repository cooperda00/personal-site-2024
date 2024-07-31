import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './TechnicalSkills.module.css';

// TODO : js, graphql, ionic

const skills = [
  { name: 'TypeScript', path: '/icons/typescript.svg' },
  { name: 'HTML5', path: '/icons/html.svg' },
  {
    name: 'CSS3',
    path: '/icons/css.svg',
  },
  { name: 'Styled Components', path: '/icons/styled-components.svg' },
  { name: 'Sass', path: '/icons/sass.svg' },
  { name: 'React', path: '/icons/react.svg' },
  { name: 'Redux', path: '/icons/redux.svg' },
  { name: 'NextJS', path: '/icons/nextjs.svg' },
  { name: 'NodeJS', path: '/icons/nodejs.svg' },
  { name: 'NestJS', path: '/icons/nestjs.svg' },
  {
    name: 'Apollo',
    path: '/icons/apollo.svg',
  },
  { name: 'Postgres', path: '/icons/postgres.svg' },
  {
    name: 'Cosmos DB',
    path: '/icons/cosmosdb.svg',
  },
  { name: 'Firebase', path: '/icons/firebase.svg' },
  {
    name: 'Capacitor',
    path: '/icons/capacitor.svg',
  },
  {
    name: 'Cypress',
    path: '/icons/cypress.png',
  },
  { name: 'Jest', path: '/icons/jest.svg' },
  { name: 'Git', path: '/icons/git.svg' },
  { name: 'Sanity', path: '/icons/sanity.svg' },
] satisfies {
  path: string;
  name: string;
}[];

const createVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1, // Stagger effect
      ease: 'easeOut',
    },
  },
});

export const TechnicalSkills = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const hasTriggered = useRef(false);

  useEffect(() => {
    if (inView && !hasTriggered.current) {
      controls.start('visible');
      hasTriggered.current = true;
    }
  }, [inView, controls]);

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <h2>Technical Skills</h2>

      <p>
        My technical toolkit spans a wide range of modern web development technologies, with
        Typescript at the core. This includes modern React-based meta frameworks like NextJS and
        backend frameworks like NestJS.
      </p>

      <p>
        I am familiar with multiple database technologies and can handle both SQL (PostgreSQL) and
        NoSQL (Cosmos DB, Firestore), depending on the situation.
      </p>

      <p>
        This diverse skill set allows me to tackle complex projects and deliver high-quality,
        performant solutions across various platforms and technologies.
      </p>

      <div className={styles.cardContainer}>
        {skills.map(({ name, path }, index) => (
          <motion.div
            key={name}
            className={styles.card}
            variants={createVariants(index)}
            initial="hidden"
            animate={controls}
            whileHover={{
              transition: { duration: 0.2 },
              transform: 'translateY(-0.35rem)',
              boxShadow: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.15)',
            }}
          >
            <Image src={path} alt={name} width={80} height={80} />
            <span className={styles.skillName}>{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
