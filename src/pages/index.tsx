import { PageSEO } from '@components/PageSEO';
import { Pagination } from '@components/Pagination';
import { SearchBar } from '@components/SearchBar';
import { ToolCardList } from '@components/ToolCardList';
import { ToolCounter } from '@components/ToolCounter';
import { paginate } from '@utils/utils';
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import type { ToolType } from '../Types';

// const ToolCardList = dynamic<any>(() =>
//   import('../components/ToolCardList').then((mod) => mod.ToolCardList),
// );

interface IndexProps {
  tools: Array<ToolType[]>;
  counter: number;
  loading: boolean;
}

const FETools = ({ tools, counter, loading }: IndexProps) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<ToolType[]>([]);

  // get page number from Pagination component
  const updatePage = (pageFromBtn: number): void => {
    setPage(pageFromBtn);
  };

  useEffect(() => {
    // console.log('all data ', tools);
    if (loading) return;
    const tmpData = tools[page];
    setData(tmpData);
  }, [tools, page, loading]);

  const handlePage = (index: number) => {
    setPage(index);
  };

  const nextPage = () => {
    // last page --> first page
    if (page === tools.length - 1) {
      setPage(0);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    // first page --> last page
    if (page === 0) {
      setPage(tools.length - 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  // simple search part
  const filteredTools: ToolType[] = data.filter((tool: ToolType) => {
    if (tool.fields.description) {
      return tool.fields.description.toLowerCase().includes(search.toLowerCase());
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  // simple search part

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <PageSEO title='home' />
      <main>
        <div className='container'>
          <SearchBar
            type='text'
            placeholder='Type keyword to search tools'
            onChange={handleChange}
          />
          <ToolCounter counter={counter} />
          <section>
            <ToolCardList tools={filteredTools} />
            <Pagination loading={loading} tools={tools} page={page} updatePage={updatePage} />
          </section>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  // ToDo use .env for development & env var for production
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  });
  let loading = true;

  try {
    const response = await client.getEntries({ content_type: 'feTools' });

    // console.log(response.items[0].sys.environment);

    // convert to array
    const paginatedData = paginate(response.items);
    // console.log(paginatedData.length);
    // console.log(paginatedData);
    loading = paginatedData && false;

    return {
      props: {
        // tools: response.items,
        tools: paginatedData,
        counter: response.items.length,
        loading,
      },
    };
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.error(`getServerSideProps: ${error}`);

    return {};
  }
};

export default FETools;
