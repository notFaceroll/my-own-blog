import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Featured from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../../lib/posts-util';
import Head from 'next/head';

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Miguel's Blog</title>
        <meta
          name="description"
          content="Random posts about web dev and programming"
        />
      </Head>
      <Hero />
      <Featured posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
