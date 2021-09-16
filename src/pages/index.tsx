import { PageSEO } from '@components/PageSEO';
import { SearchBar } from '@components/SearchBar';
import { ToolCardList } from '@components/ToolCardList';
import { ToolCounter } from '@components/ToolCounter';
import { createClient } from 'contentful';
// import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ToolType } from '../Types';

// const ToolCardList = dynamic<any>(() =>
//   import('../components/ToolCardList').then((mod) => mod.ToolCardList),
// );

interface IndexProps {
  tools: ToolType[];
  counter: number;
}

const FETools = ({ tools, counter }: IndexProps) => {
  const [search, setSearch] = useState('');

  const filteredTools: ToolType[] = tools.filter((tool: ToolType) => {
    if (tool.fields.description) {
      return tool.fields.description.toLowerCase().includes(search.toLowerCase());
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className='container'>
      <PageSEO title='home' />
      <SearchBar type='text' placeholder='Type keyword to search tools' onChange={handleChange} />
      <ToolCounter counter={counter} />
      <ToolCardList tools={filteredTools} />
    </div>
  );
};

export const getServerSideProps = async () => {
  // ToDo use .env for development & env var for production
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  });

  try {
    const response = await client.getEntries({ content_type: 'feTools' });

    // console.log(response.items[0].sys.environment);

    return {
      props: {
        tools: response.items,
        counter: response.items.length,
      },
    };
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.error(`getServerSideProps: ${error}`);

    return {};
  }
};

export default FETools;
