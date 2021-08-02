import { ToolCard } from "../ToolCard";

export const ToolCardList = ({ tools }) => {
  return (
    <>
      {tools.map((tool) => (
        <ToolCard key={tool.sys.id} tool={tool.fields} />
      ))}
    </>
  );
};
