import Head from 'next/head';
import 'styles/main.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: any) => page);
  const renderedComp = getLayout(<Component {...pageProps} />);

  // <link rel="canonical" href={canonicalURL} />
  return (
    <>
      <Head>
        <title>{`Neovim Conf 2002`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
        <meta name="description" content="Neovim Conf 2022" />
      </Head>
      {renderedComp}
    </>
  );
}

export default MyApp;
