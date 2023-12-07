import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Flex>
        <Image
          width={40}
          height="100%"
          src="https://seeklogo.com/images/O/open-ai-logo-FB5E1C8309-seeklogo.com.png"
        />
      </Flex>
    </>
  );
};

const Navbar = () => {
  return (
    <Box width="100%" paddingX={20} paddingY={4}>
      <Flex justifyContent="start" gap={16}>
        <Flex gap={4}>
          <Logo />
        </Flex>
        <Flex>
          <Flex paddingX={4}></Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
