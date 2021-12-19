import React from "react";
import styled from "styled-components";
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";
import {
  HeaderWrapper,
  Branding,
  Navigation,
  AppLogo,
  AppTitle,
  NavLink,
  FaIcon,
} from "../styles/HeaderStyles";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import Portrait from "../images/portrait-logo.svg";

const GithubIcon = styled.a`
  font-size: 20px;
  padding-top: 5px;
  cursor: pointer;
  margin-left: 2rem;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
`;
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
        <GithubIcon href="https://github.com/thomasabishop">
          <BsGithub />
        </GithubIcon>
        <FaIcon onClick={() => toggleDark()}>
          {isDark ? (
            <FaSun className="sun-icon" />
          ) : (
            <FaMoon className="moon-icon" />
          )}
        </FaIcon>
      </Navigation>
    </HeaderWrapper>
  );
}
