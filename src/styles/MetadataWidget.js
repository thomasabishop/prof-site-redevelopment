import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const Meta = styled.h4`
  font-size: 14px;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export default function MetadataWidget(props) {
  return (
    <Wrapper {...props}>
      {/* <Metadata>{props.metadata}</Metadata> */}
      <Meta>{props.metadata}</Meta>
    </Wrapper>
  );
}

// background: ${(props) =>
//     props.isTag ? props.backgroundColor : props.theme.primaryColor};
