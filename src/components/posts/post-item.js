import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const ListItem = styled.li`
  padding: 2rem;
  width: clamp(150px, 100%, 300px);
  height: 450px;
  overflow: hidden;
  position: relative;
  transition: 0.3s ease;
  cursor: pointer;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    transform: translateY(-15px);
  }

  &:hover::after {
  animation: animateBg 1.2s ease;
}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 600px;
    height: 50px;
    /* background: linear-gradient(to right, #56e8f2, #2f80ed); */
    background-color: #C9ADA7;
    transform: rotate(-40deg) translateY(-100px);
    z-index: 10;
  }

  @keyframes animateBg {
  to {
    transform: rotate(-40deg) translateY(600px);
  }
`;

const CardContent = styled.a`
  position: absolute;
  inset: 5px;
  /* background: linear-gradient(to bottom right, #333333, #121212); */
  background-color: #4a4e69;
  z-index: 20;
`;

const CardText = styled.div`
  padding: 1rem;
  color: #F2E9E4;
`;

export default function PostItem({ post }) {
  const { date, image, title, excerpt, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <ListItem>
      <Link href={linkPath}>
        <CardContent>
          <div>
            <Image src={imagePath} width={300} height={200} alt='description' />
          </div>
          <CardText>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </CardText>
        </CardContent>
      </Link>
    </ListItem>
  );
}
