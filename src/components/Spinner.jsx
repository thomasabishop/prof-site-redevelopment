import React from 'react';
import PuffLoader from 'react-spinners/BarLoader';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 200px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Spinner() {
  return (
    <Wrapper>
      <PuffLoader color="#3880ff" />
    </Wrapper>
  );
}
