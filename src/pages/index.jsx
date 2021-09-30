import React from "react";
import Seo from "../components/seo";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import OtherProjects from "../components/OtherProjects";
import PostPreview from "../components/PostPreview";
import CodingGraphs from "../components/CodingGraphs";
import MainTemplate from "../templates/MainTemplate";
// import ContactForm from "../components/ContactForm";
export default function Index() {
  return (
    <MainTemplate>
      <Seo title="Welcome" />
      <Welcome />

      <PostPreview title="Recent posts" />
      <Projects />

      <CodingGraphs />
      <OtherProjects />
      <Courses />
      {/* <ContactForm /> */}
    </MainTemplate>
  );
}
