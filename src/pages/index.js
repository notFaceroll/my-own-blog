import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Featured from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../../lib/posts-util';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: clamp(350px, 60vw, 1440px);
  justify-content: center;
  gap: 4rem;
  margin: 0 auto;
`;

export default function HomePage({ posts }) {
  return (
    <Container>
      <Head>
        <title>Miguel's Blog</title>
        <meta
          name="description"
          content="Random posts about web dev and programming"
        />
      </Head>
      <Hero />
      <Featured posts={posts} />
    </Container>
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
