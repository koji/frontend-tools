import Link from 'next/link';
import styles from './Footer.module.css';
import React from 'react';

export const Footer = () => (
  <footer className={styles.container}>
    <p>
      Copyright 2021{' '}
      <Link href='https://koji.thedev.id'>
        <a
          className={styles.link}
          href='passRef'
          target='_blank'
          rel='noopener'
        >
          koji kanao
        </a>
      </Link>{' '}
      :)
    </p>
  </footer>
);
