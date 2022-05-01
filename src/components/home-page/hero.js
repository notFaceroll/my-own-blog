import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #F2E9E4;
  align-items: center;
  padding-top: 2rem;

  > div {
    border-radius: 25px;
    overflow: hidden;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    border-bottom: 2px solid #F2E9E4;
    border-left: 2px solid #F2E9E4;
    padding: 1rem;
  }

  p {
  }
`;

export default function Hero() {
  return (
    <Container>
      <div>
        <Image
          src="/images/site/hero-image.jpg"
          alt="An image showing an avatar"
          width={319}
          height={319}
        />
      </div>
      <h1>Hello, I'm Miguel!</h1>
      <p>
        And this is place where I dump pretty much everything I have done in the
        long process of learning web dev.
      </p>
    </Container>
  );
}
