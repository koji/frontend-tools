import { IFeToolsFields, IFeTools } from '../../../@types/generated/contentful';
import { ToolCard } from '../ToolCard';
import styles from './ToolCardList.module.css';

export const ToolCardList = ({ tools }: any) => (
  <div className={styles.tool__list}>
    {tools.map((tool: IFeTools) => (
      <ToolCard key={tool.sys.id} tool={tool.fields} />
    ))}
  </div>
);
