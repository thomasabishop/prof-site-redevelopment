import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Themes';
import useColorScheme from '../context/useColourScheme';
import '../styles/misc.css';
import Portrait from '../images/portrait-logo.svg';
import Footer from '../components/Footer';
import {
  Header,
  Branding,
  AppLogo,
  AppTitle,
  FaIcon,
} from '../styles/HeaderStyles';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-top: 80px;
  margin-bottom: 5%;
`;

export default function Main(props) {
  const [colorScheme, toggleColorScheme] = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header>
        <Branding>
          <AppLogo
            src={Portrait}
            alt="Graphic portrait of Thomas Bishop, blue circle background"
          />
          <AppTitle to="/">Thomas Bishop</AppTitle>
        </Branding>
        <div className="right">
          <FaIcon onClick={toggleColorScheme}>
            {colorScheme === 'light' ? (
              <FaMoon className="moon-icon" />
            ) : (
              <FaSun className="sun-icon" />
            )}
          </FaIcon>
        </div>
      </Header>
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
