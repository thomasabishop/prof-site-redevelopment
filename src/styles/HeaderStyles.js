import styled from 'styled-components';

import { Link as GatsbyLink } from 'gatsby';
const Header = styled.div`
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

const FaIcon = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
  &:active {
    font-size: 18px;
  }
  &:focus {
    font-size: 18px;
  }
`;

export { Header, Branding, AppLogo, AppTitle, FaIcon };
