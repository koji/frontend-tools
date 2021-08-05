import Head from "next/head";

export const SEO = ({ title }) => {
  return (
    <Head>
      <title>{`fetools - ${title}`}</title>
      <meta
        name="description"
        content="A collection of tools for front-end developers."
      />
      <meta
        property="og:title"
        content="fetools - A collection of tools for front-end developers."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
