import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) =>
    props.isTag ? props.backgroundColor : props.theme.primaryColor};
  font-size: 12px;
  border-radius: 12px;
  font-weight: 500;
  padding: 0.1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const Metadata = styled.span`
  color: white;
`;

export default function MetadataWidget(props) {
  return (
    <Wrapper {...props}>
      <Metadata>{props.metadata}</Metadata>
    </Wrapper>
  );
}
