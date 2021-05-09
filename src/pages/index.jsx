import React from 'react';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import PostPreview from '../components/PostPreview';
import CodingGraphs from '../components/CodingGraphs';
import MainTemplate from '../templates/MainTemplate';
import Freelance from '../components/Freelance';
export default function Index() {
  return (
    <MainTemplate>
      <Welcome />
      <Projects />
      <PostPreview />
      <CodingGraphs />
      <Freelance />
    </MainTemplate>
  );
}
