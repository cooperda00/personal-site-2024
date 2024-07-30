import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import styles from './Contact.module.css';

export const ContactDetails = () => {
  return (
    <div className={styles.contactDetails}>
      <a href="mailto:info@danielcooper.io" aria-label="Email me" className={styles.detail}>
        <IoMdMail role="img" />
        <span>info@danielcooper.io</span>
      </a>

      <a
        href="https://github.com/cooperda00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my github"
        className={styles.detail}
      >
        <IoLogoGithub role="img" />
        <span>Github</span>
      </a>

      <a
        href="https://www.linkedin.com/in/danielcooperweb/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn"
        className={styles.detail}
      >
        <IoLogoLinkedin role="img" />
        <span>Linkedin</span>
      </a>
    </div>
  );
};
