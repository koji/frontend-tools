import { ToolType } from '../../Types';
import { ToolCard } from '../ToolCard';
import styles from './ToolCardList.module.css';

interface ToolCardProps {
  tools: ToolType[];
}

export const ToolCardList = ({ tools }: ToolCardProps) => (
  <div className={styles.tool__list}>
    {tools.map((tool: ToolType) => (
      <ToolCard key={tool.sys.id} tool={tool.fields} />
    ))}
  </div>
);
