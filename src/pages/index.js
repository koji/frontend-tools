import { createClient } from "contentful";
import { ToolCardList } from "../components/ToolCardList";

export default function FETools({ tools }) {
  return (
    <div className="recipe-list">
      <ToolCardList tools={tools} />
    </div>
  );
}

export const getStaticProps = async () => {
  // ToDo use .env for development & env var for production
  // console.log(process.env.CONTENTFUL_SPACE_ID);
  // console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({ content_type: "feTools" });
    // console.log(response);
    return {
      props: {
        tools: response.items,
      },
    };
  } catch (error) {
    console.error(`getStaticProps: ${error}`);
  }
};
