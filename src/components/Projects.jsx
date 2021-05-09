import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';
import lab from '../images/lab.svg';
import codestats from '../images/code-stats.svg';

import sqn from '../images/sqn.svg';
import tb from '../images/tb-website.svg';
import { Button } from '../styles/Button';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 4fr 70px;
  padding: 1rem 0;
  border-radius: 6px;
  align-items: center;
  min-width: 0;
  min-height: 0;
`;

const ContentBlock = styled.div`
  padding-left: 1rem;
  display: inline-grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
`;

const Title = styled.h4`
  margin-top: 0;

  margin-bottom: 0.5rem;
`;
const Description = styled.p`
  padding-right: 15px;
`;

const Image = styled.img`
  align-self: center;
  width: 50px;
  border-radius: 6px;
`;

export default function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      <Wrapper>
        <Image alt="" src={codestats} />
        <ContentBlock>
          <Title>Code Stats</Title>
          <Description>
            An interactive React dashboard that hooks into Vim and records my
            coding activity over time.
          </Description>
        </ContentBlock>
        <Button>Source</Button>
      </Wrapper>

      <Wrapper>
        <Image alt="" src={sqn} />
        <ContentBlock>
          <Title>Sine Qua Non</Title>
          <Description>
            Node.js, Webpack and Gulp-based boilerplate used as a foundation for
            static sites and simple applications.
          </Description>
        </ContentBlock>
        <Button
          href="https://github.com/thomasabishop/sinequanon"
          target="_blank"
        >
          Source
        </Button>
      </Wrapper>

      <Wrapper>
        <Image alt="" src={lab} />
        <ContentBlock>
          <Title>Thomas's React Learning Lab</Title>
          <Description>
            An environment for developing my understanding of React.js and
            experimenting with new features.
          </Description>
        </ContentBlock>
        <Button
          href="https://github.com/thomasabishop/react-learning-lab"
          target="_blank"
        >
          Source
        </Button>
      </Wrapper>

      <Wrapper>
        <Image alt="" src={tb} />
        <ContentBlock>
          <Title>thomas-bishop.co.uk</Title>
          <Description>
            My professional website and blog built with Gatsby.js, GraphQL and
            styled-components.
          </Description>
        </ContentBlock>
        <Button
          href="https://github.com/thomasabishop/thomas-bishop"
          target="_blank"
        >
          Source
        </Button>
      </Wrapper>
    </Container>
  );
}
