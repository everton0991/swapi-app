import { createGlobalStyle } from 'styled-components';
import defaultTheme from './defaultTheme';

export const GlobalStyle = createGlobalStyle`
  html, body, #root, .App {
    height: 100%;
  }
  
  body {
    background-color: ${defaultTheme.colors.mainBackground};
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
  }
`;
