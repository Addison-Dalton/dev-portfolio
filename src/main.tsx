import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

import theme from './theme';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
