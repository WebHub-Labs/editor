import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Button from "../../../../editorComponents/Button";
import { ImageWithOverlayState } from "./ImageWithOverlayState";

const ImageWithOverlay = ({
  imageWithOverlay,
}: {
  imageWithOverlay: ImageWithOverlayState;
}) => {
  return (
    <Box
      position="relative"
      backgroundImage={`url("${imageWithOverlay.imageLink}")`}
    >
      <Image
        src={`${imageWithOverlay.imageLink}`}
        height="600px"
        width="100%"
      />
      <Flex
        position="absolute"
        top={0}
        left={0}
        zIndex={10}
        height="100%"
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontFamily="bold"
          fontSize="xx-large"
          className="hero_primaryText"
          color="white"
        >
          {imageWithOverlay.text}
        </Text>
        <Text
          fontFamily="bold"
          fontSize="x-large"
          color="white"
          className="hero_secondaryText"
        >
          Hero Section
        </Text>
        <Link href={`${imageWithOverlay.button.link}`}>
          <Button text={`${imageWithOverlay.button.text}`} />
        </Link>
      </Flex>
    </Box>
  );
};

export default ImageWithOverlay;
