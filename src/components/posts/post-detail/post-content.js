import React from 'react';
import styled from 'styled-components';
import PostHeader from './post-header';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs1',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs1.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fffeee;
  width: clamp(350px, 75vw, 1280px);
  margin: 0 auto;
  padding: 2rem;
`;

export default function PostContent(props) {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <Container>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </Container>
  );
}
