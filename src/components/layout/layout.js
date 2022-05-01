import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';
import Footer from './footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  padding: 8rem 1rem;
  background-image: linear-gradient(to bottom right, #333333, #121212);
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <MainNavigation />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
}
