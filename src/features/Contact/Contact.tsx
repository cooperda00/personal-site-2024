import styles from './Contact.module.css';
import { ContactDetails } from './ContactDetails';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>

      <p>
        {`I'm open to discussing new opportunities, exciting projects, or connecting with fellow tech
        professionals.`}
      </p>

      <p>
        {`Whether you have a job opening, a project idea, or just want to chat about web development,
        I'd love to hear from you. Feel free to use the form below or reach out via my professional
        profiles`}
      </p>

      <div className={styles.container}>
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
};
