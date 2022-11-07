import { Image, Stack, Text } from "@chakra-ui/react";
import jordan4L from "../Assets/jordan4L.png";
import jordan4R from "../Assets/jordan4R.png";
import logo from "../Assets/jordan.svg";
const Banner = () => {
  return (
    <Stack spacing="20">
      <Stack alignItems={"center"} w="100%" h="400px" spacing="12">
        <Stack alignItems={"center"}>
          <Image src={logo} alt="jordan" w={"66px"} marginTop={"50px"} />
        </Stack>
        <Image
          src={jordan4L}
          height="700px"
          width="700px"
          position="absolute"
          zIndex={2}
        />
        <Image
          src={jordan4R}
          height="700px"
          width="700px"
          zIndex={1}
          position="absolute"
        />
      </Stack>
      <Stack>
        <Text align={"center"} fontSize={"8xl"} fontWeight={"bold"} zIndex={3} color='primary'>
          IV
        </Text>
      </Stack>
    </Stack>
  );
};

export default Banner;
