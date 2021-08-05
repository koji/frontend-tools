import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import styles from "./HeaderLink.module.css";

export const HeaderLink = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/koji/frontend-tools">
        <a>
          <GoMarkGithub className={styles.icon} />
        </a>
      </Link>
      <Link href="https://forms.gle/ZUZALQDFuhMqqdbh9">
        <a className={styles.req}>request</a>
      </Link>
    </div>
  );
};
