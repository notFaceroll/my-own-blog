import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: #C9ADA7;
  align-items: center;
  padding: 2rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid #C9ADA7;

  > div {
    border-radius: 25px;
    overflow: hidden;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    width: 45%;
  }
  span {
    color: #F2E9E4;
  }
`;

export default function Hero() {
  return (
    <Container>
      <div>
        <Image
          src="/images/site/hero-image.jpg"
          alt="An image showing an avatar"
          width={266}
          height={266}
        />
      </div>
      <h1>Hello, I am <span>Miguel</span>!</h1>
      <p>
        And this is a blog-like with a couple posts and pages that I made while learning NextJS.
      </p>
    </Container>
  );
}
