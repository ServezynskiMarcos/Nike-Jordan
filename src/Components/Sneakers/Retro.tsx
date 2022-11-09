import {
  Grid,
  GridItem,
  HStack,
  Image,
  SlideFade, Text,
  VStack
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
const Retro: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref);
  return (
    <SlideFade in={inViewport}  offsetY={8} offsetX={"-100px"}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        minHeight="100vh"
        alignItems="center"
        
      >
        <GridItem colSpan={1} rowSpan={3} textAlign="center" >
          <Text
            fontFamily="primary"
            as="b"
            fontSize="4xl"
            align="center"
            color="secondary"
          >
            RETRO
          </Text>
          <HStack justify="space-evenly">
            <Text transform="rotate(90deg)" fontSize="3xl" color="secondary">
              ㉗
            </Text>
            <Text fontSize="12px" w={"150px"} color="secondary">
              1999 - Present
            </Text>
          </HStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/wkt5gdnpuckp9pisr1je/white-legend-blue-midnight-navy.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2015
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              White/Legend Blue-Midnight Navy
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/wxm9yu7rnvrq6ynbizps/teal-white-black-retro.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2015
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Teal/White-Black
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack >
            <Image
              src="https://static.nike.com/a/images/hswzvhr9g8ozh8id0qte/black-white.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              2015
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Black/White
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/zknhavmoosr7oywvqseh/university-red-university-red.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              2015
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              University Red/University Red
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/dymg0hxdiddxjkyz2kyo/white-fire-red-black-tech-grey.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs">
              2016
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              White/Fire Red-Black-Tech Grey
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/dkgzenl52fjtqdi9bp1b/midnight-navy-varsity-maize-white-metallic-gold-star-.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2016
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              Midnight Navy/Varsity Maize-White-Metallic Gold Star
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/jqvsoigajulqxdkc1kbx/university-blue-black-varsity-red.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2018
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              University Blue/Black-Varsity Red
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/sl1xf8fqq5pelxdsr6zv/white-white.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2018
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              White/White
            </Text>
          </VStack>
        </GridItem>

        <GridItem ref={ref} color="secondary">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/364d06f0-f2a7-4f7a-80d4-c56fb27ef497/cool-grey-chrome-dark-charcoal.png"
              w="250px"
              h={"1xl"}
            />
            <Text fontFamily="primary" fontSize="xs" >
              2019
            </Text>
            <Text fontFamily="primary" fontSize="xs" >
              Cool Grey/Chrome-Dark Charcoal
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </SlideFade>
  );
};
export default Retro;
