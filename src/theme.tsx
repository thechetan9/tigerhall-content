import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    orange: {
      600: '#FF5900',
      400: '#FFA97A',
      50: '#FFF9F6',
    },
    gray: {
      700: '#797670',
      900: '#383733',
      800: '#4D4B46',
      70: 'rgba(0, 0, 0, 0.7)',
      400: '#DEDBD4',
    },
    teal: {
      1000: '#001315',
    },
  },
});
