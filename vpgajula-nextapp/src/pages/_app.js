import '@/styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>{' '}
        &nbsp; &nbsp;
        <Link href="/about">About</Link>{' '}
        &nbsp; &nbsp;
        <Link href="/register">SignUp</Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
