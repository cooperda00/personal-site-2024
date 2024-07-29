import styles from './Contact.module.css';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>

      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis ab velit officiis
        quasi sed consequuntur itaque quaerat! Corrupti sapiente, eaque hic maiores expedita
        perspiciatis consequuntur magnam repellat mollitia minus?
      </p>

      <ContactForm />
    </section>
  );
};
