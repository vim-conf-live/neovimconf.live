import Head from 'next/head';
import Button from 'components/Button';

export default function Home() {
  const handleClick = () => {
    alert('click');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome!</h1>
        <Button onClick={handleClick}>Click me!</Button>
      </main>
    </div>
  );
}
