import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1A3847",
    500: "#008080",
    200: "#B2D8D8",
  },
};

export const theme = extendTheme({ colors });

const ThemeProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ThemeProvider;
