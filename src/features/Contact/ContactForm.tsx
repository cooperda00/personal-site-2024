import { Button } from '@/components/Button';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiSolidSend } from 'react-icons/bi';
import styles from './Contact.module.css';

// TODO : focus styles across app

type FormInputs = {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
};

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await axios.post('/api/contact', data);
      // TODO : Show success toast
      console.log(response.data);
      reset();
    } catch (error) {
      // TODO : Show error toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formField}>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="Your name"
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="Your email"
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Your message"
          rows={4}
        />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="phoneNumber" style={{ display: 'none' }}>
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="text"
          {...register('phoneNumber')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button type="submit" icon={<BiSolidSend />} variant="secondary">
        Send
      </Button>
    </form>
  );
};
