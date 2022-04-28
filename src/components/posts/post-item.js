import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 2rem;
  border: 1px solid #fff;
`;

export default function PostItem({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <ListItem>
      <Link href={`/post/${post.id}`}>
        <a>
          <div>Image</div>
          <div>
            <h3>{post.title}</h3>
            <time>{formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </ListItem>
  );
}
