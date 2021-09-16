import dynamic from 'next/dynamic';
import { ToolType } from '../../Types';
// import { ToolCard } from '../ToolCard';
import styles from './ToolCardList.module.css';

interface ToolCardProps {
  tools: ToolType[];
}

const ToolCard = dynamic<any>(() => import('../ToolCard').then((mod) => mod.ToolCard));

export const ToolCardList = ({ tools }: ToolCardProps) => (
  <div className={styles.tool__list}>
    {tools.map((tool: ToolType) => (
      <ToolCard key={tool.sys.id} tool={tool.fields} />
    ))}
  </div>
);
