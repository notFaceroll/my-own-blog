import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  border-bottom: 6px solid #333333;
  margin-bottom: 15px;
  padding-bottom: 2rem;
  h1 {
    color: #333333;
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    
    text-align: center;
  }
`;

export default function PostHeader({ title, image }) {
  return (
    <Header>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </Header>
  );
}
