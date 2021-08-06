import Head from "next/head";
import thumbnail from "../../../public/images/thumbnail.jpg";

export const PageSEO = ({ title }) => {
  return (
    <Head>
      <title>{`fetools - ${title}`}</title>
      <meta
        name="title"
        content="fetools - A collection of tools for front-end developers"
      />
      <meta
        name="description"
        content="fetools - A collection of tools for front-end developers. Offer useful information for web development!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fetools.vercel.app/" />
      <meta
        property="og:title"
        content="fetools - A collection of tools for front-end developers"
      />
      <meta
        property="og:description"
        content="fetools - A collection of tools for front-end developers. Offer useful information for web development!"
      />
      <meta property="og:image" content={thumbnail} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://fetools.vercel.app/" />
      <meta
        property="twitter:title"
        content="fetools - A collection of tools for front-end developers"
      />
      <meta
        property="twitter:description"
        content="fetools - A collection of tools for front-end developers. Offer useful information for web development!"
      />
      <meta property="twitter:image" content={thumbnail} />
    </Head>
  );
};
