import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Themes';
import Header from '../components/Header';
import '../styles/misc.css';
import Footer from '../components/Footer';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-top: 80px;
  margin-bottom: 5%;
`;

export default function Main(props) {
  // const [colorScheme, toggleColorScheme] = useColorScheme();
  //const theme = colorScheme === 'light' ? lightTheme : darkTheme;
  const theme = darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
