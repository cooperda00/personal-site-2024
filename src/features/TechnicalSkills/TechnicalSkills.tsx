import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <h2>Technical Skills</h2>

      <p>
        My technical toolkit spans a wide range of modern web development technologies, enabling me
        to build robust, scalable, and efficient full-stack applications.
      </p>

      <p>
        On the front-end, I&apos;m proficient in HTML5, CSS3, and React, with expertise in state
        management using Redux and styling with Sass and Styled Components. My back-end skills
        include Node.js, NestJS, and NextJS, allowing me to create powerful server-side
        applications. I use Typescript across the stack.
      </p>

      <p>
        I&apos;m experienced with both SQL (PostgreSQL) and NoSQL (Cosmos DB) databases, as well as
        cloud platforms like Firebase. For mobile development, I utilize Capacitor. My commitment to
        quality is reflected in my use of testing frameworks such as Jest and Cypress, and I&apos;m
        well-versed in Git for version control. Additionally, I have experience with GraphQL through
        Apollo, and content management using Sanity.
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
