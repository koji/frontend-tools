import styles from './SearchBar.module.css';

export const SearchBar = ({ ...rest }) => (
  <div className={styles.search}>
    <input className={styles.input} {...rest} />
  </div>
);
