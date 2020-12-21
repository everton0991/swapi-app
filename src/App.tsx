import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import { GlobalStyle } from './theme';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />

      <Router />
    </ThemeProvider>
  );
}

export default App;
