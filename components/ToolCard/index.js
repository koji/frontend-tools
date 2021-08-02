import Link from "next/link";

export const ToolCard = ({ tool }) => {
  // title: string;
  // description: string
  // thumbnail: { fields: { file: string, title: string) }
  // link: string
  // category: string[]
  const { title, description, thumbnail, link, category } = tool;
  return (
    <div className="card">
      <div className="featured"></div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="actions">
          <Link href={link}>
            <a>{link}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
