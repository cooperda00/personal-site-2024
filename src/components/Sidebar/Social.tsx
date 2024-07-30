import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import styles from './Sidebar.module.css';

export const Social = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a
          href="https://github.com/cooperda00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my github"
          className={styles.socialItem}
        >
          <IoLogoGithub role="img" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/danielcooperweb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn"
          className={styles.socialItem}
        >
          <IoLogoLinkedin role="img" />
        </a>
      </li>
    </ul>
  );
};
