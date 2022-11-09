import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const History: React.FC = () => {
  return (
    <Box
      color="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <HStack height="100vh" alignItems={"flex-start"} justify="space-evenly">
        <Text transform="rotate(90deg)" fontFamily="primary" mt="15px">
          DESIGN
        </Text>
        <VStack align="start">
          <Image
            src="https://static.nike.com/a/images/eubfb0av7xadvqf9e7yw/ajiv-design.jpg"
            w="700px"
          />
          <Text as="i">1989</Text>
        </VStack>
        <Text fontFamily="primary">1989</Text>
        <VStack align="end">
          <Image
            src="https://static.nike.com/a/images/ghd93aywf3ko1tddcijc/ajiv-sketch.jpg"
            w="290"
          />
          <Text as="i">Design</Text>
        </VStack>
      </HStack>
      <Box width="50%">
        <HStack my="10%">
          <Text fontFamily="primary" transform="rotate(90deg)">
            JORDAN
          </Text>
          <Text
            fontFamily="primary"
            textAlign="center"
            fontSize="35px"
            lineHeight="1"
          >
            THE AIR JORDAN IV WAS THE   FIRST SHOE IN THE LINE TO FEATURE
            “OVER-MOLDED” MESH
          </Text>
          <Text fontFamily="primary" transform="rotate(90deg)">
            JORDAN
          </Text>
        </HStack>
      </Box>
      <Image
        src="https://static.nike.com/a/images/kou0oxzgpvnuekmfmjho/mj.jpg"
        w="70%"
        mt="10%"
      />
      <HStack my="10%">
        <Image
          src="https://i8.amplience.net/i/jpl/gettyimages-456135408-719x1080-72f5eed8ff06a8d216c76098a1160411"
          w="500px"
          h="600px"
        />
        <Image
          src="https://i8.amplience.net/i/jpl/air-jordan-iv-white-cement-grey-594cdfc10606cc1cfbcc839cc0911253"
          w="500px"
          h="600px"
        />
      </HStack>
      <Stack w="full" align="center" justify="center">
        <VStack position="absolute" spacing={0}>
          <Text fontFamily="primary" fontSize="6xl">
            I'VE NEVER BEEN AFRAID TO FAIL.
          </Text>
          <Text fontSize="1xl" fontFamily="primary" as="i">
            Michael Jordan
          </Text>
        </VStack>
        <Image
          src="https://static.nike.com/a/images/ssgfzfuykuuc3hv3bneh/air-jordan-4.png"
          h="450px"
          w="full"
        />
      </Stack>
      <Box
        bg="red"
        p="10px"
        w="full"
        m={0}
        textAlign="end"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontFamily="primary" fontSize="8xl">
          III
        </Text>
        <Text fontFamily="primary" fontSize="8xl">
          V
        </Text>
      </Box>
      <Box
        bg="black"
        p="20px"
        w="full"
        m={0}
        textAlign="end"
        fontSize="13px"
        display="flex"
        justifyContent="space-between"
      >
        <Text>© 2022 Marcos Servezynski. All rights reserved.</Text>
        <Text> Terms Privacy</Text>
      </Box>
    </Box>
  );
};

export default History;
