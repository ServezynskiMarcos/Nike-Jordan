import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/jordan.svg";
const Nav: React.FC = () => {
  return (
    <Stack paddingY={6} alignItems="center">
      <Image src={logo} height="62" width="66" marginTop={5} />
    </Stack>
  );
};

export default Nav;
