import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeaderWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.mainColor};
  border-bottom: 1px solid ${({ theme }) => theme.borders};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 100;
`;

const Branding = styled.div`
  display: inline-grid;
  grid-template-columns: 50px 2fr;
  align-items: center;
`;

const AppLogo = styled.img`
  width: 35px;
  margin-bottom: 0;
`;

const AppTitle = styled(GatsbyLink)`
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  :hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const NavLink = styled(GatsbyLink)`
  color: inherit;
  font-size: 16px;
  margin-left: 1rem;
`;

const NavLinkAnchor = styled(AnchorLink)`
  color: inherit;
  font-size: 16px;
  margin-left: 1rem;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FaIcon = styled.div`
  padding-top: 5px;
  cursor: pointer;
  margin-left: 2rem;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
`;

export {
  HeaderWrapper,
  NavLink,
  NavLinkAnchor,
  Branding,
  Navigation,
  AppLogo,
  AppTitle,
  FaIcon,
};
