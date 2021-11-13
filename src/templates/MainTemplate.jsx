import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeContext } from "styled-components";
import Header from "../components/Header";
import "../styles/misc.css";
import "../styles/fonts.css";
import Footer from "../components/Footer";
import styled from "styled-components";
const Wrapper = styled.div`
  padding-top: 80px;
  margin-bottom: 5%;
`;

export default function Main(props) {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <GlobalStyles theme={theme} />
      <Header />
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </>
  );
}
