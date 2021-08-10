import { ToolCard } from '../ToolCard';
import styles from './ToolCardList.module.css';

export const ToolCardList = ({ tools }) => (
  <div className={styles.tool__list}>
    {tools.map((tool) => (
      <ToolCard key={tool.sys.id} tool={tool.fields} />
    ))}
  </div>
);
