import Link from 'next/link';
import { GoMarkGithub } from 'react-icons/go';
import styles from './HeaderLink.module.css';
import React from 'react';

export const HeaderLink = () => (
  <div className={styles.container}>
    <Link href='https://github.com/koji/frontend-tools'>
      <a href='passRef' target='_blank' rel='noopener'>
        <GoMarkGithub className={styles.icon} />
      </a>
    </Link>
    <Link href='https://forms.gle/ZUZALQDFuhMqqdbh9'>
      <a href='passRef' className={styles.req} target='_blank' rel='noopener'>
        request
      </a>
    </Link>
  </div>
);
