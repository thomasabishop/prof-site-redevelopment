import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainTemplate from '../templates/MainTemplate';
import ErrorImage from '../images/error-image.svg';
import { Container } from '../styles/Container';
const Announcement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  margin: 1rem;
`;

export default function ErrorPage() {
  return (
    <MainTemplate>
      <Container>
        <Announcement>
          <Image src={ErrorImage} />
          <h4>Oops, that page cannot be found!</h4>

          <Link to="/">Home</Link>
        </Announcement>
      </Container>
    </MainTemplate>
  );
}
