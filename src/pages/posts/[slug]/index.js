import React from 'react';
import styled from 'styled-components';
import { getPostData, getPostsFiles } from '../../../../lib/posts-util';
import PostContent from '../../../components/posts/post-detail/post-content';

const Container = styled.div`
`;

export default function PostDetailPage({ post }) {
  return (
    <Container>
      <PostContent post={post} />
    </Container>
  );
}

export function getStaticProps({ params }) {
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const fileFilenames = getPostsFiles();
  const slugs = fileFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
