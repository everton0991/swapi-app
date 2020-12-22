import { createGlobalStyle } from 'styled-components';
import defaultTheme from './defaultTheme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${defaultTheme.colors.mainBackground};
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
  }
`;
