import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const customTheme = {
  config,
  colors: {
    primary: '#2E55C1',
    secondary: '#09A3AA',
    tertiary: '#990F7B',
    background: {
      primary: '#0A192F',
      secondary: 'rgba(20, 63, 121, 0.50)'
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
      body: {
        background: 'background.primary',
        backgroundImage:
          'radial-gradient(700px at 15% 35%, background.secondary, background.primary)'
      }
    }
  }
};

const theme = extendTheme(customTheme);

export default theme;
