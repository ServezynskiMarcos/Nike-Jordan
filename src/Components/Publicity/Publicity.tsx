import {
  Button,
  Image,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
const Publicity: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {});
  return (
    <ScaleFade in={inViewport} initialScale={0.1}>
      <Stack minHeight="50vh" minW="100%" ref={ref} justify="center" my="10%">
        <Image
          src="https://static.nike.com/a/images/uw2vwv1szm7c1atar4fp/air-jordan-4.jpg"
          minW="100%"
        />
        <VStack position="absolute" right="20%" spacing="0">
          <Text color="primary" fontFamily="primary">
            SHOP AIR JORDAN IV
          </Text>
          <Text color="primary">Available now on jordan.com</Text>
          <a href="https://www.nike.com/w/mens-shoes-nik1zy7ok" target="_blank">
          <Button
            size="sm"
            colorScheme="blackAlpha"
            variant="outline"
            style={{ marginTop: "20px", width: "150px" }}
          >
            SHOP
          </Button></a>
        </VStack>
      </Stack>
    </ScaleFade>
  );
};

export default Publicity;
