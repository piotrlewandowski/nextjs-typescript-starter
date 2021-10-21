import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js TypeScript Starter</title>
        <meta name="description" content="Next.js TypeScript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://github.com/piotrlewandowski/nextjs-typescript-starter">
            Next.js TypeScript Starter!
          </a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
