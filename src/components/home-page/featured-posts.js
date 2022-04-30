import React from 'react';
import PostsGrid from '../posts/posts-grid';
import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  background-color: #333333;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  
  h2 {
    margin: 2rem auto;
    text-size: 2rem;
    color: #fafafa
  }
`;

export default function Featured(props) {
  return (
    <Container>
      <h2>Featured</h2>
      <PostsGrid posts={props.posts} />
    </Container>
  );
}
