import React from 'react';
import PostsGrid from '../posts/posts-grid';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  h2 {
    margin: 2rem auto;
    text-size: 2rem;
    color: #fafafa
  }
`;

export default function Featured(props) {
  return (
    <Container>
      <h2>Featured Post</h2>
      <PostsGrid posts={props.posts} />
    </Container>
  );
}
