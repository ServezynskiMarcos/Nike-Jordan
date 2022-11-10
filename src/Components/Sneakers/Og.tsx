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
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { GalleryOg } from "../../Assets/GalleryImg";

const Og: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {});

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerOpen, setViewerOpen] = useState<boolean>(false);

  const openImage = useCallback((i: number) => {
    setCurrentImage(i);
    setViewerOpen(true);
  }, []);

  const closeImage = () => {
    setCurrentImage(0);
    setViewerOpen(false);
  };
  const images = GalleryOg.map((e) => e.og);
  return (
    <SlideFade in={inViewport} offsetY="500px" offsetX="-500px">
      <Grid
        templateColumns="repeat(4, 1fr)"
        minHeight="100vh"
        alignItems="center"
        ref={ref}
      >
        <GridItem textAlign="center" color="secondary" >
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

        <GridItem color="secondary" cursor="pointer">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/2c13900f-3312-4255-a6dc-adb5a566d2e2/white-fire-red-black.png"
              w="250px"
              h={"1xl"}
              key={1}
              onClick={() => openImage(0)}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              White/Fire Red-Black
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary" cursor="pointer">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/ihzsudy2fn03muk24n33/air-jordan-iv-og-black-cement-grey.png"
              w="250px"
              h={"1xl"}
              onClick={() => openImage(1)}
            />
            <Text fontFamily="primary" fontSize="xs">
              1989
            </Text>
            <Text fontFamily="primary" fontSize="xs">
              Black/Cement Grey
            </Text>
          </VStack>
        </GridItem>

        <GridItem color="secondary" cursor="pointer">
          <VStack>
            <Image
              src="https://static.nike.com/a/images/ud9mbcdjsrntvfsrfoxx/air-jordan-iv-og-off-white-military-blue-military-blue.png"
              w="250px"
              h={"1xl"}
              onClick={() => openImage(2)}
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
      {viewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImage}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(209,209,209, 0.1)",
            backdropFilter: " blur(5px)",
            height: "100vh",
            zIndex: 100,
            width: "100%",
            position: "relative",
            top: "-650px",
            padding: "140px"
          }}
          closeOnClickOutside={true}
        />
      )}
    </SlideFade>
  );
};

export default Og;
