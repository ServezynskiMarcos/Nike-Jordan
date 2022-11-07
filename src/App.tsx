import { Container } from "@chakra-ui/react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import texture from "./Assets/texture.jpg";

function App() {
  return (
    <Container maxW="100%" minH={"100vh"} backgroundImage={texture} backgroundSize="cover">
      
      <Banner />
    </Container>
  );
}

export default App;
