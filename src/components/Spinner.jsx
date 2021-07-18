import React from 'react';
import Loader from 'react-spinners/ScaleLoader';
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
      <Loader color="#3880ff" />
    </Wrapper>
  );
}
