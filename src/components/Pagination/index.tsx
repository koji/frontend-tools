import { useState } from 'react';
import { ToolType } from '../../Types';
import styles from './Pagination.module.css';

interface PaginationProps {
  loading: boolean;
  tools: Array<ToolType[]>;
  page: number;
  updatePage: (pageFromBtn: number) => void;
}

export const Pagination = ({ loading, tools, page, updatePage }: PaginationProps) => {
  const [targetPage, setTargetPage] = useState<number>(page);

  const handlePage = (index: number) => {
    setTargetPage(index);
    updatePage(targetPage);
  };

  const nextPage = () => {
    // last page --> first page
    if (targetPage === tools.length - 1) {
      setTargetPage(0);
    } else {
      setTargetPage((prev) => prev + 1);
    }
    updatePage(targetPage);
  };

  const prevPage = () => {
    // first page --> last page
    if (targetPage === 0) {
      setTargetPage(tools.length - 1);
    } else {
      setTargetPage((prev) => prev - 1);
    }
    updatePage(targetPage);
  };

  return (
    <div className={styles.btn__container}>
      <button
        aria-label='previous page'
        className={`${styles.btn} ${styles.next__btn}`}
        onClick={() => prevPage()}
      >
        {!loading ? 'Previous' : null}
      </button>
      {loading
        ? null
        : tools.map((item, index) => (
            <button
              key={index}
              className={`${styles.page__btn} ${
                index === targetPage ? `(${styles.active__btn})` : null
              }`}
              onClick={() => {
                handlePage(index);
              }}
            >
              {index + 1}
            </button>
          ))}
      <button
        aria-label='next page'
        className={`${styles.btn} ${styles.next__btn}`}
        onClick={() => nextPage()}
      >
        {!loading ? 'Next' : null}
      </button>
    </div>
  );
};
