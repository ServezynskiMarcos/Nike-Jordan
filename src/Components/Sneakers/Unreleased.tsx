import React from "react";
import {
  Grid,
  GridItem,
  HStack,
  Image,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
const Unreleased: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {});
  return (
    <SlideFade in={inViewport} offsetY="400px">
      <Grid
        templateColumns="repeat(4, 1fr)"
        minHeight="100vh"
        alignItems="center"
        ref={ref}
      >
        <GridItem textAlign="center">
          <Text
            fontFamily="primary"
            as="b"
            fontSize="4xl"
            align="center"
            color="secondary"
          >
            UNRELEASED
          </Text>
          <HStack justify="space-evenly">
            <Text transform="rotate(90deg)" fontSize="3xl" color="secondary">
              ②
            </Text>
            <Text fontSize="12px" w={"150px"} color="secondary">
              We've unearthed two unreleased AJ IV's from the archive.
            </Text>
          </HStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/fe17d0f4-b724-4da2-b7b6-d19fc42f2671/olive-oiled-suede-flight-satin.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Olive/Oiled Suede-Flight Satin
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/jyyvnijvphytwi5qhojj/black-red.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Black/Red
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </SlideFade>
  );
};
export default Unreleased;
