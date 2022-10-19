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
        <link rel="shortcut icon" href="/favicon.png" />
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
