import 'antd/dist/antd.css';
import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  * {
    font-family: inherit;
    box-sizing: border-box;
  }
  body,
  p,
  pre,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  button {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
  }
  strong {
    font-weight: 700;
  }
  i,
  em {
    font-style: normal;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;

    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

export default GlobalStyle;
