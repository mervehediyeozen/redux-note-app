import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
   mainColors: {
      100: "#dbc9ad", // Açık renk
      200: "#bdad95",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0", // Orta ton
      600: "#718096", // Koyu ton
      700: "#4a5568",
      800: "#2d3748", // En koyu ton
      900: "#1a202c",
    },
    noteColors: {
        100: "#71967b", // Açık renk
        200: "#d1c1d9",
        300: "#e6d5a8",
        400: "#e3ada3",
        500: "#a0aec0", // Orta ton
        600: "#718096", // Koyu ton
        700: "#4a5568",
        800: "#2d3748", // En koyu ton
        900: "#1a202c",
      },
  },

});

export default theme;