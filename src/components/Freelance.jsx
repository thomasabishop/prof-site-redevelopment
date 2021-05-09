import React from 'react';
import freelance from '../data/freelance';
import { Button } from '../styles/Button';
import { Container } from '../styles/Container';

export default function Freelance() {
  return (
    <Container>
      <h2>Freelance</h2>
      {freelance.map((data, index) => (
        <div key={index}>
          <h4>{data.client}</h4>
          <p>{data.description}</p>
          <Button style={{ maxWidth: '80px' }} href={data.url} target="_blank">
            Site
          </Button>
        </div>
      ))}
    </Container>
  );
}
