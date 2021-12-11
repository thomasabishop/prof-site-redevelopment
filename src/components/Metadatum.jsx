import React from "react";
import styled from "styled-components";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  color: grey;
`;

const Data = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;
export default function Metadatum(props) {
  return (
    <Wrapper>
      {props.icon === "date" ? <MdOutlineDateRange /> : <AiOutlineTag />}
      <Data>{props.metadata}</Data>
    </Wrapper>
  );
}
