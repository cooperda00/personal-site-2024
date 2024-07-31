import Link from 'next/link';
import { IoMdDownload } from 'react-icons/io';
import styles from './Sidebar.module.css';

const anchorLinks = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
] satisfies { label: string; href: string }[];

export const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      {anchorLinks.map(({ href, label }) => (
        <li key={label}>
          <Link href={href} className={styles.navItem}>
            {label}
          </Link>
        </li>
      ))}

      <li>
        <a
          href="/daniel_cooper_cv.pdf"
          className={`${styles.navItem} ${styles.cv}`}
          download="daniel_cooper_cv.pdf"
        >
          CV
          <IoMdDownload />
        </a>
      </li>
    </ul>
  );
};
