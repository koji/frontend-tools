import { ToolType } from '../../Types';
import styles from './Pagination.module.css';

interface IPagination {
  loading: boolean;
  tools: Array<ToolType[]>;
  page: number;
}

export const Pagination = ({ loading, tools, page }: IPagination) => (
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
            className={`${styles.page__btn} ${index === page ? `(${styles.active__btn})` : null}`}
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
