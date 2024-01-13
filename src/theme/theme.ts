import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  colors: {
    Background: {
      400: '#143F79',
      500: '#0A192F'
    }
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  }
};

const theme = extendTheme(customTheme);

export default theme;
