import React from 'react';
import { Provider } from 'react-redux';

import store from './store/createStore';
import { Router } from './routes';
import { GlobalStyle } from './theme';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <Router />
    </Provider>
  );
}

export default App;
