import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import EditorMainContent from "./EditorMainContent";

const MainContent = () => {
  return (
    <Box
      marginLeft="420px"
      marginTop={8}
      // marginX={8}
      boxShadow="10px 0px 10px 1px #aeaaaa"
      width="70%"
      height="80vh"
      display="flex"
      bg="#f9f9f9"
      justifyContent="center"
    >
      <Flex justifyContent="center" width="100%">
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="start"
          borderRadius={4}
        >
          <Flex
            bg="white"
            boxShadow="10px 0px 10px 1px #aeaaaa"
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
          <EditorMainContent page="/" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainContent;
