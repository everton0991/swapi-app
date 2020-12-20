import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <S.App>
        <S.AppHeader>
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>

          <S.AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </S.AppLink>
        </S.AppHeader>
      </S.App>
    </ThemeProvider>
  );
}

export default App;
