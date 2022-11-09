import { Stack, Text, VStack, HStack, SlideFade } from "@chakra-ui/react";
import React from "react";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
const Info: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {});
  return (
    <SlideFade in={inViewport} offsetY="300px">
      <Stack spacing={5} py="50px" mx="100px" ref={ref}>
        <Stack>
          <Text
            align="center"
            color="tertiary"
            fontFamily="primary"
            fontSize="4xl"
          >
            AIR JORDAN IV
          </Text>
          <Text
            color="primary"
            fontFamily="primary"
            fontSize="100px"
            textAlign="center"
            lineHeight="1"
            px="25px"
          >
            ON A TRAJECTORY ALL  HIS OWN, JORDAN PIONEERS A ROAD TO SUCCESS
          </Text>
        </Stack>
        <HStack align="center" justify="space-evenly">
          <VStack>
            <Text
              align={"center"}
              fontSize={"1xl"}
              zIndex={3}
              color="secondary"
              fontFamily="primary"
              as="b"
            >
              ORIGINAL RELEASE
            </Text>
            <Text
              align={"center"}
              fontSize={"sm"}
              zIndex={3}
              color="tertiary"
              fontFamily="primary"
              lineHeight="0"
            >
              1989
            </Text>
          </VStack>
          <VStack>
            <Text
              align={"center"}
              fontSize={"1xl"}
              zIndex={3}
              color="secondary"
              fontFamily="primary"
              as="b"
            >
              DESIGNER
            </Text>
            <Text
              align={"center"}
              fontSize={"sm"}
              zIndex={3}
              color="tertiary"
              fontFamily="primary"
              lineHeight="0"
            >
              Tinker Hatfield
            </Text>
          </VStack>
          <VStack>
            <Text
              align={"center"}
              fontSize={"1xl"}
              zIndex={3}
              color="secondary"
              fontFamily="primary"
              as="b"
            >
              COLOR
            </Text>
            <Text
              align={"center"}
              fontSize={"sm"}
              zIndex={3}
              color="tertiary"
              fontFamily="primary"
              lineHeight="0"
            >
              Black / Cement Grey
            </Text>
          </VStack>
          <VStack>
            <Text
              align={"center"}
              fontSize={"1xl"}
              zIndex={3}
              color="secondary"
              fontFamily="primary"
              as="b"
            >
              ORIGINAL PRICE
            </Text>
            <Text
              align={"center"}
              fontSize={"sm"}
              zIndex={3}
              color="tertiary"
              fontFamily="primary"
              lineHeight="0"
            >
              $110
            </Text>
          </VStack>
          <VStack>
            <Text
              align={"center"}
              fontSize={"1xl"}
              zIndex={3}
              color="secondary"
              fontFamily="primary"
              as="b"
            >
              STYLE CODE
            </Text>
            <Text
              align={"center"}
              fontSize={"sm"}
              zIndex={3}
              color="tertiary"
              fontFamily="primary"
              lineHeight="0"
            >
              4363
            </Text>
          </VStack>
        </HStack>
      </Stack>
    </SlideFade>
  );
};

export default Info;
