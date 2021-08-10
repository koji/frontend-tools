import Link from 'next/link';
import styles from './Header.module.css';
import { HeaderLink } from '../HeaderLink';

export const Header = () => (
  <header className={styles.container}>
    <HeaderLink />
    <Link href="/">
      <a className={styles.link}>
        <h1 className={styles.headers}>
          {/* <span className={styles.header__title__first}>Front</span>
            <span className={styles.header__title__second}>End</span>
            <span className={styles.header__title__third}>Tools</span> */}
          <span className={styles.header__title}>Frontend Tools</span>
        </h1>
        <h2 className={`${styles.headers} ${styles.header__subtitle}`}>
          Spread Joy & Usefulness
        </h2>
      </a>
    </Link>
  </header>
);
