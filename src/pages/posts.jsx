import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import PostPreview from '../components/PostPreview';
export default function Posts() {
  return (
    <MainTemplate>
      <PostPreview title="Posts" mainHeading />
    </MainTemplate>
  );
}
