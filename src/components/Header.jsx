import React from 'react';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import {
  HeaderWrapper,
  Branding,
  Navigation,
  AppLogo,
  AppTitle,
  NavLink,
  FaIcon,
} from '../styles/HeaderStyles';
import { FaSun, FaMoon } from 'react-icons/fa';

import Portrait from '../images/portrait-logo.svg';
export default function Header() {
  const { isDark, toggleDark } = useStyledDarkMode(undefined);
  return (
    <HeaderWrapper>
      <Branding>
        <AppLogo
          src={Portrait}
          alt="Graphic portrait of Thomas Bishop, blue circle background"
        />
        <AppTitle to="/">Thomas Bishop</AppTitle>
      </Branding>
      <Navigation>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <FaIcon onClick={() => toggleDark()}>
          {isDark ? (
            <FaMoon className="moon-icon" />
          ) : (
            <FaSun className="sun-icon" />
          )}
        </FaIcon>
      </Navigation>
    </HeaderWrapper>
  );
}
