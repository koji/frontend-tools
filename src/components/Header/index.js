import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.link}>
          <h1 className={styles.headers}>
            {/* <span className={styles.header__title__first}>Front</span>
            <span className={styles.header__title__second}>End</span>
            <span className={styles.header__title__third}>Tools</span> */}
            <span className={styles.header__title}>FrontEnd Tools</span>
          </h1>
          <h2 className={`${styles.headers} ${styles.header__subtitle}`}>
            Spread Joy & Usefulness
          </h2>
        </a>
      </Link>
    </header>
  );
};
