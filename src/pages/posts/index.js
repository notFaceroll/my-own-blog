import React from 'react';
import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Post number #1',
    excerpt: 'This is the first post',
    date: '2022-02-10',
    id: 'p1',
  },
  {
    title: 'Post number #2',
    excerpt: 'This is the second post',
    date: '2022-03-13',
    id: 'p2',
  },
  {
    title: 'Post number #3',
    excerpt: 'This is the third post',
    date: '2022-05-22',
    id: 'p3',
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
