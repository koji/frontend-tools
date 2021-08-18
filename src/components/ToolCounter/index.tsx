import styles from './ToolCounter.module.css';

interface Props {
  counter: number;
}

export const ToolCounter = ({ counter }: Props) => (
  <div className={styles.container}>
    <h2 className={styles.text}>
      currently
      {counter} sites
    </h2>
  </div>
);
