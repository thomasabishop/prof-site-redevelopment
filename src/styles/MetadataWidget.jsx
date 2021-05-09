import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.div`
  background: ${(props) =>
    props.isTag ? props.backgroundColor : props.theme.primaryColor};
  margin-right: 1rem;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  display: inline-grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 10px;
  padding: 2px 0rem;
  align-items: center;
`;

const InitialsIcon = styled.div`
  background: ${(props) =>
    props.isTag
      ? darken(0.1, props.backgroundColor)
      : darken(0.1, props.theme.primaryColor)};
  color: white;
  margin-left: 5px;
  padding: 1px 5px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  border-radius: 50px;
`;

const Metadata = styled.span`
  margin-right: 12px;
  padding: 1px 0px;
  color: white;
`;

export default function MetadataWidget(props) {
  return (
    <Wrapper {...props}>
      <InitialsIcon {...props}>{props.initials}</InitialsIcon>
      <Metadata>{props.metadata}</Metadata>
    </Wrapper>
  );
}
