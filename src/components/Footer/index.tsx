import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.container}>
    <p role='presentation'>
      Copyright 2021{' '}
      <Link href='https://koji.thedev.id'>
        <a className={styles.link} target='_blank' rel='noopener'>
          koji kanao
        </a>
      </Link>{' '}
      :)
    </p>
  </footer>
);
