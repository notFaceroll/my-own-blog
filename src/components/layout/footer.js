import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ffdef2, #e6f0ff);
  color: #333333;
  z-index: 10;
`;

export default function Footer() {
  return <Container>Created with NextJS</Container>;
}
