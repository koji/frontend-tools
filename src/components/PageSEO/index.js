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
      <meta property="og:image" content={"/thumbnail.jpg"} />

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
      <meta property="twitter:image" content={"/thumbnail.jpg"} />
      {/* <meta
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kojikanao_nyc" />
      <meta name="twitter:title" content="FRONTEND TOOLS" />
      <meta
        name="twitter:description"
        content="fetools - A collection of tools for front-end developers. HTML/CSS/JS/TS & Image"
      />
      <meta
        name="twitter:image"
        content="https://user-images.githubusercontent.com/474225/128434919-88ab6e5a-e23e-4eba-bc91-4f4b4e01e95f.jpg"
      /> */}
    </Head>
  );
};
