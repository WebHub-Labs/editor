import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Button from "../../editorComponents/Button";

const MainContent = () => {
  return (
    <Box
      marginTop={8}
      width="100%"
      display="flex"
      bg="#f9f9f9"
      justifyContent="center"
    >
      <Flex justifyContent="center" width="100%">
        <Flex
          border="1px solid red"
          width="70%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          borderRadius={4}
        >
          <Flex
            bg="white"
            border="1px solid gray"
            alignItems="center"
            paddingY={2}
          >
            <Flex gap={4}>
              <Text>Home</Text>
              <Flex borderRadius={4} border="1px solid gray" padding={1}>
                www.rohit.com/us
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="column" padding={2}>
            <Navbar />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainContent;
