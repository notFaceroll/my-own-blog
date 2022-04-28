import React from 'react';
import PostItem from './post-item';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2rem;
  grid-auto-rows: auto;
  place-items: center;
`;

export default function PostsGrid({ posts }) {
  return (
    <List>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </List>
  );
}
