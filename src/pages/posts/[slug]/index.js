import React from 'react';
import styled from 'styled-components';
import PostContent from '../../../components/posts/post-detail/post-content';

const Container = styled.div`
  height: 100vh;
  background-color: #bcbcbc;
  padding-top: 84px;
`;

export default function PostDetailPage() {
  return (
    <Container>
      <PostContent />
    </Container>
  );
}
