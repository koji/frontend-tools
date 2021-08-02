import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>
        Copyright 2021{" "}
        <Link href="https://koji.thedev.id">
          <a className={styles.link}>koji kanao</a>
        </Link>{" "}
        :)
      </p>
    </footer>
  );
};
