import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Real Good Studio</title>
      <meta
        name="description"
        content="We are a full service creative studio specializing in good ideas. We create original, experimental, and interactive work."
      />
      <meta property="og:title" content="Real Good Studio" />
      <meta
        property="og:description"
        content="We are a full service creative studio specializing in good ideas. We create original, experimental, and interactive work."
      />
      <meta property="og:url" content="realgood.tv" />
      <meta property="twitter:title" content="Real Good Studio" />
      <meta
        property="twitter:description"
        content="We are a full service creative studio specializing in good ideas. We create original, experimental, and interactive work."
      />
      {/* <meta
        property="twitter:image"
        content="https://realgood.tv/img/og-image.png"
      />
      <meta
        property="og:image"
        content="https://realgood.tv/img/og-image.png"
      />
      <meta
        property="og:video"
        content="https://realgood.tv/img/real-good-vid2.png"
      />
      <meta property="twitter:image:alt" content="Real Good Studio" />
      <meta property="og:site_name" content="Real Good Studio" /> */}
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO;
