import React from 'react';
import { Logo } from './Logo';
import styles from './Sidebar.module.css';
import { Navigation } from './Navigation';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <menu className={styles.sidebar}>
      <Logo />
      <Navigation />
      <Social />
    </menu>
  );
};
