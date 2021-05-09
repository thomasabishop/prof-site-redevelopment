import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Context from '../context/context';
import styled from 'styled-components';
import Portrait from '../images/portrait-logo.svg';
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';
const Wrapper = styled.div`
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

const Button = styled.button`
  background: ${({ theme }) => theme.contrastBlockColor};
  border: 0;
  border-radius: 6px;
  //padding-top: 4px;
  height: 30px;
  width: 30px;
  //padding-bottom: 0px;
  cursor: pointer;
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

export default function Header() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <Wrapper>
      <Branding>
        <AppLogo
          src={Portrait}
          alt="Graphic portrait of Thomas Bishop, blue circle background"
        />
        <AppTitle to="/">Thomas Bishop</AppTitle>
      </Branding>
      <div className="right">
        <FaIcon onClick={handleClick}>
          {!state.isDark ? (
            <FaMoon className="moon-icon" />
          ) : (
            <FaSun className="sun-icon" />
          )}
        </FaIcon>
      </div>
    </Wrapper>
  );
}
