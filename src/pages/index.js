import { createClient } from "contentful";
import { ToolCardList } from "../components/ToolCardList";
import { ToolCounter } from "../components/ToolCounter";

export default function FETools({ tools, counter }) {
  return (
    <div className="recipe-list">
      <ToolCounter counter={counter} />
      <ToolCardList tools={tools} />
    </div>
  );
}

export const getStaticProps = async () => {
  // ToDo use .env for development & env var for production
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({ content_type: "feTools" });
    // console.log(response.items.length);
    return {
      props: {
        tools: response.items,
        counter: response.items.length,
      },
    };
  } catch (error) {
    console.error(`getStaticProps: ${error}`);
  }
};
