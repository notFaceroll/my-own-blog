import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 0 2rem;
  width: 100%;
  height: 64px;
  background-color: #4a4e69;
  z-index: 10;
  color: #f2e9e4;

  nav {
    width: clamp(300px, 60vw, 1440px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    ul {
      width: 55%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      font-size: 1.125rem;

      @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0 1rem;
      }
    }

    li {
      text-decoration: none;
      position: relative;
      overflow: hidden;

      .active {
        font-weight: bold;
      }
    }

    li::before {
      content: '';
      position: absolute;
      height: 1.125px;
      width: 100%;
      background-color: #f2e9e4;
      bottom: 0;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.25s ease;
    }

    li:hover::before {
      transform: scaleX(1);
    }
  }
`;

export default function MainNavigation() {
  const router = useRouter();
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={router.pathname == '/posts' ? 'active' : ''}>
                Posts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname == '/about' ? 'active' : ''}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == '/contact' ? 'active' : ''}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
