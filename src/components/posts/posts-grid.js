import React from 'react';
import PostItem from './post-item';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 1rem;
  grid-auto-rows: auto;
  place-items: center;
  list-style: none;
  padding: 0;
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
