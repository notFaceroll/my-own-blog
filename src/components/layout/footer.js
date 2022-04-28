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
  background-color: linear-gradient(to right, #ffdef2, #e6f0ff);
`;

export default function Footer() {
  return <Container>Github</Container>;
}
