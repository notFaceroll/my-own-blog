import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4A4E69;
  color: #F2E9E4;
  z-index: 10;
`;

export default function Footer() {
  return <Container>Created with NextJS</Container>;
}
