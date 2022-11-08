import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
      },
    },
  },
  colors: {
    primary:'rgb(255,255,255)',
    secondary:'rgb(31,30,30)',
    tertiary: 'rgb(166,55,52)',
    },
  fonts: {
    primary: "'Secular One', sans-serif"
  }
  });
