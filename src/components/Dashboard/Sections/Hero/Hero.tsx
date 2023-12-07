import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Button from "./../../../../editorComponents/Button";

const Hero = () => {
  return (
    <Box
      position="relative"
      backgroundImage='url("https://i.pinimg.com/originals/28/46/ac/2846ac79d1d82ef3bf861fb0187bf16a.png")'
    >
      <Image
        // position="absolute"
        src="https://i.pinimg.com/originals/28/46/ac/2846ac79d1d82ef3bf861fb0187bf16a.png"
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
          Art & Rhyme
        </Text>
        <Text
          fontFamily="bold"
          fontSize="x-large"
          color="white"
          className="hero_secondaryText"
        >
          Hero Section
        </Text>
        <Link href="/shop">
          <Button text="Shop Now" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Hero;
