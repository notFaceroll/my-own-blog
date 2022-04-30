import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Featured from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    excerpt: 'This is the first post',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs1',
    image: 'getting-started-nextjs1.png',
  },
  {
    title: 'Getting Started with NextJS',
    excerpt: 'This is the second post',
    date: '2022-02-11',
    slug: 'getting-started-with-nextjs2',
    image: 'getting-started-nextjs2.png',
  },
  {
    title: 'Getting Started with NextJS',
    excerpt: 'This is the third post',
    date: '2022-02-12',
    slug: 'getting-started-with-nextjs3',
    image: 'getting-started-nextjs3.png',
  },
  {
    title: 'Getting Started with NextJS',
    excerpt: 'This is the fourth post',
    date: '2022-02-13',
    slug: 'getting-started-with-nextjs4',
    image: 'getting-started-nextjs4.png',
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Featured posts={DUMMY_POSTS} />
    </Fragment>
  );
}
