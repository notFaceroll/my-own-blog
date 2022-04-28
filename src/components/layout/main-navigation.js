import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 36px;
  background-color: #e6f0ff;
  z-index: 10;

  nav {
    width: 20%;

    ul {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default function MainNavigation() {
  return (
    <Header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
