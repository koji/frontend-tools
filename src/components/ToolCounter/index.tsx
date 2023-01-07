import styles from './ToolCounter.module.css';

interface ToolCounterProps {
  counter: number;
}

export const ToolCounter = ({ counter }: ToolCounterProps) => (
  <div className={styles.container}>
    <h2 className={styles.text}>
      currently
      {counter} sites
    </h2>
  </div>
);
