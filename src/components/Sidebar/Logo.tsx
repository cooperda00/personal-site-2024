'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Logo as LogoSVG } from '../../svg';
import styles from './Sidebar.module.css';

export const Logo: FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: 'spring' }}>
      <a href="/#home" className={styles.logoLink}>
        <LogoSVG className={styles.logo} width={100} height={120} />
      </a>
    </motion.div>
  );
};
