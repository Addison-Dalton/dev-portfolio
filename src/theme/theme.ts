import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { Button } from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const customTheme = {
  config,
  components: {
    Button
  },
  colors: {
    primary: '#2E55C1',
    secondary: '#09A3AA',
    tertiary: '#990F7B',
    background: {
      primary: '#0A192F',
      secondary: 'rgba(20, 63, 121, 0.50)',
      50: '#e7f1ff',
      100: '#c0d4f2',
      200: '#98b7e6',
      300: '#709bdc',
      400: '#497ed2',
      500: '#3165b8',
      600: '#254e90',
      700: '#1a3867',
      800: '#0d223f',
      900: '#010b19'
    }
  },
  shadows: {
    textUnderline: 'inset 0 -0.4em 0 0 var(--chakra-colors-primary)'
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  },
  styles: {
    global: {
      '#root': {
        overflow: 'hidden'
      },
      body: {
        background: 'background.primary',
        backgroundImage:
          'radial-gradient(700px at 15% 35%, background.secondary, background.primary)'
      },
      'a, button': {
        _focusVisible: {
          outline: 'var(--chakra-colors-tertiary) solid 3px'
        }
      }
    }
  }
};

const theme = extendTheme(customTheme);

export default theme;
