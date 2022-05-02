import React from 'react';
import styled from 'styled-components';
import PostsGrid from './posts-grid';

const Container = styled.section`
  width: clamp(350px, 60vw, 1440px);
  margin: 0 auto;
  h1 {
    color: #F2E9E4;
    font-size: 3rem;
    text-align: center;
    margin-top: 0;
  }
`;

export default function AllPosts({ posts }) {
  return (
    <Container>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </Container>
  );
}
