import styles from "./Searchbar.module.css";

export const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.search}>
      <input className={styles.input} {...rest} />
    </div>
  );
};
