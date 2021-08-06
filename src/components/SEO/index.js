import Head from "next/head";

export const SEO = ({ title }) => {
  return (
    <Head>
      <title>{`fetools - ${title}`}</title>
      <html lang="en-us" />
      <meta
        name="description"
        content="A collection of tools for front-end developers."
      />
      <meta
        property="og:title"
        content="fetools - A collection of tools for front-end developers."
      />
      <meta property="og:url" content="https://fetools.vercel.app/" />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/474225/128434919-88ab6e5a-e23e-4eba-bc91-4f4b4e01e95f.jpg"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
