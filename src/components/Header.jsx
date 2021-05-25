import React from 'react';
import {
  HeaderWrapper,
  Branding,
  Navigation,
  AppLogo,
  AppTitle,
  NavLink,
  NavLinkAnchor,
} from '../styles/HeaderStyles';
import Portrait from '../images/portrait-logo.svg';
export default function Header() {
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

        <NavLinkAnchor to="/#contact">Contact</NavLinkAnchor>
        {/*   <FaIcon onClick={toggleColorScheme}> */}
        {/*     {colorScheme === 'light' ? ( */}
        {/*       <FaMoon className="moon-icon" /> */}
        {/*     ) : ( */}
        {/*       <FaSun className="sun-icon" /> */}
        {/*     )} */}
        {/*   </FaIcon> */}
      </Navigation>
    </HeaderWrapper>
  );
}
