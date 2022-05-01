import React from 'react';
import styled from 'styled-components';
import PostsGrid from './posts-grid';

const Container = styled.section`
`;

export default function AllPosts({ posts }) {
  return (
    <Container>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </Container>
  );
}
