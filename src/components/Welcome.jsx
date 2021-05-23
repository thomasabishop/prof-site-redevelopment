import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Container } from '../styles/Container';
const Wrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 1.2rem;
`;

const Title = styled.h1`
  border-bottom: none;
  //padding-bottom: 1rem;
  margin-bottom: 1rem;
  margin-top: 25px;
`;

const WelcomeButton = styled(AnchorLink)`
  width: 100px;
  display: block;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.3px;
  border: 1px solid #3880ff;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: none;
  color: #3880ff;
  padding: 3px;
  outline: none;
  transition: 0.5s ease;
  :hover {
    background: ${({ theme }) => theme.primaryColorShaded};
    text-decoration: none;
    color: #3880ff;
  }
  :focus {
    outline: none;
  }
`;

export default function Welcome() {
  return (
    <Container>
      <Wrapper>
        <Title>Hi, I'm Thomas </Title>
        <p>I’m a software engineer from London living in Aberdeen. </p>
        <p style={{ paddingBottom: '.5rem' }}>
          I work for
          <a href="https://www.arria.com/">
            {' '}
            ARRIA Natural Language Generation
          </a>
          , an AI software company. My tech stack comprises JavaScript,
          TypeScript, and React. I enjoy learning new technologies and writing
          about my progress as a self-taught developer.
        </p>
        <WelcomeButton to="/#contact" stripHash>
          Contact
        </WelcomeButton>
      </Wrapper>
    </Container>
  );
}
