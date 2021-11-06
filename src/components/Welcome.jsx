import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Container } from "../styles/Container";
import portrait from "../images/portrait-logo.svg";
const Wrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 1rem;
  }
`;

const TextBlock = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
const Title = styled.h1`
  border-bottom: none;
  margin-bottom: 1rem;
  margin-top: 25px;
`;

const Portrait = styled.img`
  width: 140px;
  @media (max-width: 768px) {
    width: 120px;
    padding-top: 1rem;
  }
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
  transition: background 0.5s ease;
  :hover {
    background: ${({ theme }) => theme.primaryColorShaded};
    text-decoration: none;
    color: #3880ff;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Welcome() {
  return (
    <Container>
      <Wrapper>
        <TextBlock>
          <Title>Hi, I'm Thomas </Title>
          <p>
            I’m a software engineer from London living in Aberdeen. I work for
            an AI company that provides solutions using natural language
            generation.
          </p>
          <p style={{ paddingBottom: ".5rem" }}>
            I try and write about my projects, learning and technical
            preoccupations.
          </p>
          {/* <WelcomeButton to="/#contact" stripHash>
            Contact
          </WelcomeButton>
  */}
        </TextBlock>
        <div>
          <Portrait src={portrait} alt="" />
        </div>
      </Wrapper>
    </Container>
  );
}
