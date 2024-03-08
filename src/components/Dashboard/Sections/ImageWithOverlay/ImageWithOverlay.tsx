import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Button from "../../../../editorComponents/Button";
import AddImageWithOverlay from "./AddImageWithOverlay";
import { useStore } from "zustand";

const ImageWithOverlay = ({
  imageWithOverlay,
}: {
  imageWithOverlay: AddImageWithOverlay;
}) => {
  const imgOverlay = useStore(imageWithOverlay.imageWithOverlay);
  return (
    <Box position="relative" backgroundImage={`url("${imgOverlay.imageLink}")`}>
      <Image src={`${imgOverlay.imageLink}`} height="600px" width="100%" />
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
          color="blue"
        >
          {imgOverlay.text}
        </Text>
        <Text
          fontFamily="bold"
          fontSize="x-large"
          color="blue"
          className="hero_secondaryText"
        >
          Fancy Tshirts
        </Text>
        <Link href={`${imgOverlay.button.link}`}>
          <Button text={`${imgOverlay.button.text}`} />
        </Link>
      </Flex>
    </Box>
  );
};

export default ImageWithOverlay;
