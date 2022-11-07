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
    secondary:'rgb(28,27,27)',
    },
  });
