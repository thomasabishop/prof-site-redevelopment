import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 1rem;
`;

const Title = styled.h1`
  border-bottom: none;
  //padding-bottom: 1rem;
  margin-bottom: 1rem;
  margin-top: 25px;
`;

export default function Welcome() {
  return (
    <Container>
      <Wrapper>
        <Title>Hi, I'm Thomas </Title>
        <p>
          I’m a web developer from the UK. I work primarily with modern ES6+
          JavaScript, TypeScript and React. I work for the{' '}
          <a href="http://www.bdcdesign.com/">Blueprint Design Company</a> and
          sometimes take on freelance work. I enjoy learning new technologies
          and aspire to become a full-stack developer.
        </p>
      </Wrapper>
    </Container>
  );
}
