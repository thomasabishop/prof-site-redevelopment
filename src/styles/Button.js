import styled from 'styled-components';
import { Link } from 'gatsby';
export const Button = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.3px;
  border: 1px solid #3880ff;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: none;
  color: #3880ff;
  padding: 2px;
  outline: none;
  transition: 0.5s ease;
  :hover {
    background: ${({ theme }) => theme.primaryColorShaded};
    text-decoration: none;
    color: #3880ff;
  }
  :focus {
    outline: none;
  }
`;

export const ButtonMain = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.3px;
  border: 1px solid #3880ff;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: none;
  color: #3880ff;
  padding: 3px;
  outline: none;
  transition: 0.5s ease;
  :hover {
    background: ${({ theme }) => theme.primaryColorShaded};
    text-decoration: none;
    color: #3880ff;
  }
  :focus {
    outline: none;
  }
`;

export const GatsbyButton = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.3px;
  border: 1px solid #3880ff;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: none;
  color: #3880ff;
  padding: 3px;
  outline: none;
  transition: 0.5s ease;
  :hover {
    background: ${({ theme }) => theme.primaryColorShaded};
    text-decoration: none;
    color: #3880ff;
  }
  :focus {
    outline: none;
  }
`;
