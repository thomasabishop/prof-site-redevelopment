import React from 'react';
import Seo from '../components/seo';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import PostPreview from '../components/PostPreview';
import CodingGraphs from '../components/CodingGraphs';
import MainTemplate from '../templates/MainTemplate';
import Freelance from '../components/Freelance';
import ContactForm from '../components/ContactForm';
export default function Index() {
  return (
    <MainTemplate>
      <Seo title="Welcome" />
      <Welcome />

      <PostPreview title="Recent posts" />
      <Projects />

      <CodingGraphs />
      <ContactForm />
    </MainTemplate>
  );
}
