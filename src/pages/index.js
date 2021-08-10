import { createClient } from 'contentful';
import { useState } from 'react';
import { ToolCardList } from '../components/ToolCardList';
import { ToolCounter } from '../components/ToolCounter';
import { SearchBar } from '../components/SearchBar';
import { PageSEO } from '../components/PageSEO';

export default function FETools({ tools, counter }) {
  const [search, setSearch] = useState('');

  const filteredTools = tools.filter((tool) =>
    tool.fields.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <PageSEO title="home" />
      <SearchBar
        type="text"
        placeholder="Type keyword to search tools"
        onChange={handleChange}
      />
      <ToolCounter counter={counter} />
      <ToolCardList tools={filteredTools} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // ToDo use .env for development & env var for production
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({ content_type: 'feTools' });
    // console.log(response.items.length);
    return {
      props: {
        tools: response.items,
        counter: response.items.length,
      },
    };
  } catch (error) {
    console.error(`getServerSideProps: ${error}`);
    return {};
  }
};
