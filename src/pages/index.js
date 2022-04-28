import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Featured from '../components/home-page/featured-posts';

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Featured />
    </Fragment>
  );
}
