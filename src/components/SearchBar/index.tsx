import styles from './SearchBar.module.css';
import React from 'react';

export const SearchBar = ({ ...rest }) => (
  <div className={styles.search}>
    <input className={styles.input} {...rest} />
  </div>
);
