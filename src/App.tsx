import { Container } from "@chakra-ui/react";
import texture from "./Assets/texture.jpg";
import Banner from "./Components/Banner/Banner";
import History from "./Components/History/History";
import Info from "./Components/Info/Info";
import Publicity from "./Components/Publicity/Publicity";
import Og from "./Components/Sneakers/Og";
import Retro from "./Components/Sneakers/Retro";
import Unreleased from "./Components/Sneakers/Unreleased";

function App() {
  return (
    <Container
      minW="full"
      backgroundSize="cover"
      p={0}
      m={0}
      bgColor="cuarter"
      
    >
      <Container maxW="100%" backgroundImage={texture} backgroundSize="cover">
        <Banner />
        <Info />
      </Container>
      <Container minW="100%">
        <Og />
        <Unreleased />
        <Retro />
      </Container>
      <Publicity />
      <History />
    </Container>
  );
}

export default App;
