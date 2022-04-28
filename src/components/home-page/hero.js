import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #333333, #121212);

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #fafafa;
  }

  p {
    color: #fafafa;
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
        and this is place where I dump pretty much everything I have done in the
        long process of learning web dev.
      </p>
    </Container>
  );
}
