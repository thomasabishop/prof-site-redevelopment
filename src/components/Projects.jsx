import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
import projectsData from "../data/projectsData";
const HeaderLink = styled.h4`
  cursor: pointer;
`;
export default function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      {projectsData.map((data, index) => (
        <div key={index}>
          <HeaderLink>
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </HeaderLink>
          <p>{data.description}</p>
        </div>
      ))}
    </Container>
  );
}
