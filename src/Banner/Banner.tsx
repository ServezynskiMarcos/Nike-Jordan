import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import jordan4L from "../Assets/jordan4L.png";
import jordan4R from "../Assets/jordan4R.png";
import logo from "../Assets/jordan.svg";
const Banner = () => {
  return (
    <Stack spacing={32}>
      <Stack alignItems={"center"} w="100%" h="400px" spacing="12">
        <Stack alignItems={"center"}>
          <Image src={logo} alt="jordan" w={"66px"} marginTop={"50px"} />
        </Stack>
        <Image
          src={jordan4L}
          height="750px"
          width="750px"
          position="absolute"
          zIndex={2}
        />
        <Image
          src={jordan4R}
          height="750px"
          width="750px"
          zIndex={1}
          position="absolute"
        />
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
        <Stack>
          <Text
            align={"center"}
            fontSize={"8xl"}
            zIndex={3}
            color="primary"
            fontFamily="primary"
            as="b"
          >
            IV
          </Text>
        </Stack>
        <VStack>
          <Text
            align={"center"}
            fontSize={"1xl"}
            zIndex={3}
            color="secondary"
            fontFamily="primary"
            as="b"
          >
            COLLECTION
          </Text>
          <Text
            align={"center"}
            fontSize={"sm"}
            zIndex={3}
            color="tertiary"
            fontFamily="primary"
            lineHeight="0"
          >
            DNA Archive
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
            LOCATION
          </Text>
          <Text
            align={"center"}
            fontSize={"sm"}
            zIndex={3}
            color="tertiary"
            fontFamily="primary"
            lineHeight="0"
          >
            Beaverton, Oregon
          </Text>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default Banner;
