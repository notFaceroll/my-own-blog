import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
