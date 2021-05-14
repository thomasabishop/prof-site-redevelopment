import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';
import { GrCodepen } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const FooterIcon = styled.a`
  font-size: 30px;
  margin: 0 1rem;
`;

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterIcon href="https://github.com/thomasabishop">
          <VscGithub />
        </FooterIcon>
        <FooterIcon href="https://codepen.io/thomasabishop">
          <GrCodepen />
        </FooterIcon>
      </FooterWrapper>
    </Container>
  );
}
