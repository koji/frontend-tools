import Head from "next/head";

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
      <meta name="author" content="koji kanao" />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, TypeScript, Frontend, Image, Tool, Web development, Frontend development"
      />
      <meta
        name="google-site-verification"
        content="yFEV7ljAJkrCTMlIRwO1lMEpbC5ZeSeJr2Il9eZL1CI"
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
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/474225/128434919-88ab6e5a-e23e-4eba-bc91-4f4b4e01e95f.jpg"
      />

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
      <meta
        property="twitter:image"
        content="https://user-images.githubusercontent.com/474225/128434919-88ab6e5a-e23e-4eba-bc91-4f4b4e01e95f.jpg"
      />
    </Head>
  );
};
