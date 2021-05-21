import React from 'react';
import { Container } from '../styles/Container';

export default function Biography() {
  return (
    <Container>
      <h2>Bio</h2>
      <p style={{ paddingTop: '.5rem' }}>
        I was educated at Wimbledon College and studied philosophy at the
        University of Warwick (2006-2009). Later I trained as a primary school
        teacher, completing my Postgraduate Certificate of Education and
        Middlesex University (2011-2012). I taught in schools throughout south
        London for several years and then taught myself how to code and switched
        to web development. I now work as a frontend software engineer in
        Scotland.
      </p>
    </Container>
  );
}
