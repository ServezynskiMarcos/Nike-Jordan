import {
  Grid,
  GridItem,
  HStack,
  Image,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
const Og: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {});
  return (
    <SlideFade in={inViewport} offsetY="500px" offsetX="-500px">
      <Grid
        templateColumns="repeat(4, 1fr)"
        minHeight="100vh"
        alignItems="center"
        ref={ref}
        
      >
        <GridItem textAlign="center" color="secondary">
          <Text fontFamily="primary" as="b" fontSize="4xl">
            OG
          </Text>
          <HStack justify="space-evenly">
            <Text transform="rotate(90deg)" fontSize="3xl">
              ③
            </Text>
            <Text fontSize="12px" w={"150px"}>
              The architect let loose four AJ IV originals, just as MJ returned
              to the game, giving them a distinguished look and a cultural
              cache.
            </Text>
          </HStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/2c13900f-3312-4255-a6dc-adb5a566d2e2/white-fire-red-black.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              White/Fire Red-Black
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/ihzsudy2fn03muk24n33/air-jordan-iv-og-black-cement-grey.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Black/Cement Grey
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/ud9mbcdjsrntvfsrfoxx/air-jordan-iv-og-off-white-military-blue-military-blue.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Off White/Military Blue{" "}
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </SlideFade>
  );
};

export default Og;
