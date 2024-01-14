import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  variants: {
    outline: {
      borderRadius: 0,
      borderColor: 'white',
      boxShadow: '4px 4px var(--chakra-colors-secondary)',
      backgroundColor: 'background.primary',
      transition: 'all 100ms ease-in',
      _hover: {
        backgroundColor: 'background.800',
        textDecoration: 'none'
      },
      _focus: {
        backgroundColor: 'background.800',
        boxShadow: '2px 2px var(--chakra-colors-secondary)'
      },
      _active: {
        backgroundColor: 'background.800',
        boxShadow: '2px 2px var(--chakra-colors-secondary)'
      }
    }
  }
});
