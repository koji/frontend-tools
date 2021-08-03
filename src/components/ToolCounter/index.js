import styles from "./ToolCounter.module.css";

export const ToolCounter = ({ counter }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>currently {counter} sites</h2>
    </div>
  );
};