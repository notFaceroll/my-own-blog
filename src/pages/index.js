import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Featured from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../../lib/posts-util';

export default function HomePage({ posts }) {
  return (
    <Fragment>
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
