import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    min-height: calc(100vh - 162px);
    background: ${({ theme }) => theme.contrastBlockColor};
    color: ${({ theme }) => theme.fontColor};
}
  h1, h2 {
    border-color: ${({ theme }) => theme.borders};
    border-width: 2px;
    padding-bottom: 1rem;
    font-family: 'Roboto';
    font-weight: 500;
  }
    a {
      color: ${({ theme }) => theme.primaryColor};
      font-weight: 500;
      transition: 0.2s;
      :hover {
        text-decoration:none;
        color: #eb445a;
      }
    }
  blockquote {
    background: ${({ theme }) => theme.primaryColorShaded};
    border-radius: 0px;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding: 1rem;
    border-left: 3px solid ${({ theme }) => theme.primaryColor} ;
    color: ${({ theme }) => theme.primaryColor};
  p {
    display: inline;
    }
  }

h3,h4, h5, h6 {
  font-family: 'Roboto';
  font-weight: 500;
}
p > code,
  li > code {
    background-color: ${({ theme }) => theme.inlineCodeBackground} !important;
    color: ${({ theme }) => theme.fontColor} !important;
    padding: 0.1rem 0.3rem;
    border-radius: 6px;
  }

blockquote > p > code {
    color: ${({ theme }) => theme.primaryColor} !important;
  }

th, td {
  border-bottom: 1px solid  ${({ theme }) => theme.borders};
}



`;

export default GlobalStyles;
