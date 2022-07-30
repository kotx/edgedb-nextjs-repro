// pages/index.tsx
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Posts } from './api/post';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Posts | null>(null);
  useEffect(() => {
    fetch(`/api/post`)
      .then((result) => result.json())
      .then(setPosts);
  }, []);
  if (!posts) return <p>Loading...</p>;

  return <div className={styles.contianer}>
    <Head>
      <title>My Blog</title>
      <meta name="description" content="An awesome blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Blog</h1>
      <div style={{ height: '50px' }}></div>
      {posts.map((post) => {
        return (
          <a href={`/post/${post.id}`} key={post.id}>
            <div className={styles.card}>
              <p>{post.title}</p>
            </div>
          </a>
        );
      })}
    </main></div>;
}

export default HomePage