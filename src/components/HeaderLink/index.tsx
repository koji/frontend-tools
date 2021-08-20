import Link from 'next/link';
import { GoMarkGithub } from 'react-icons/go';
import styles from './HeaderLink.module.css';

export const HeaderLink = () => (
  <div className={styles.container}>
    <Link href='https://github.com/koji/frontend-tools'>
      <a target='_blank' rel='noopener' aria-label='Link to GitHub repo'>
        <GoMarkGithub className={styles.icon} />
      </a>
    </Link>
    <Link href='https://forms.gle/ZUZALQDFuhMqqdbh9'>
      <a className={styles.req} target='_blank' rel='noopener'>
        request
      </a>
    </Link>
  </div>
);
