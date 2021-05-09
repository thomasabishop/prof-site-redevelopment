import React, { useReducer } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import reducer from '../context/reducer';
import Context from '../context/context';
import { lightTheme, darkTheme } from '../styles/Themes';
import '../styles/misc.css';

import styled from 'styled-components';
import Header from '../components/Header';
const Wrapper = styled.div`
  padding-top: 80px;
  margin-bottom: 140px;
`;

export default function Main(props) {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Wrapper>{props.children}</Wrapper>
      </ThemeProvider>
    </Context.Provider>
  );
}
