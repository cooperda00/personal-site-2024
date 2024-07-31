import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.css';

export const Logo: FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: 'spring' }}>
      <Link href="/#home" className={styles.logoLink}>
        <Image src={'logo.svg'} alt={'danielcooper.io logo'} width={100} height={120} />
      </Link>
    </motion.div>
  );
};
