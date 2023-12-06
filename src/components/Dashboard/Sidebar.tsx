import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiFillLayout } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  return (
    <>
      <Flex
        position="sticky"
        maxWidth="lg"
        width="sm"
        height="calc( 100vh - 70px )"
        boxShadow="10px 0px 10px 1px #aeaaaa"
      >
        <Flex
          borderRight="2px solid gray"
          boxShadow="10px 0px 10px 1px #bffaaaa"
          height="100%"
          gap={2}
          paddingY={2}
          paddingX={4}
          flexDirection="column"
          justifyContent="start"
        >
          <Flex borderRadius={2} bg="orange" padding={2}>
            <AiFillLayout />
          </Flex>

          <Flex borderRadius={2} bg="orange" padding={2}>
            <AiFillHome />
          </Flex>
          <Flex></Flex>
        </Flex>

        <Flex flexDirection="column" padding={1} gap={4}>
          <Flex flexDirection="column" gap={2}>
            {/* <Flex padding={2}>
              <Text fontWeight="bold">Pages</Text>
            </Flex> */}
          </Flex>
          <Flex flexDirection="column" gap={2}>
            <Flex padding={2}>
              <Text fontWeight="bold">Sections</Text>
            </Flex>
            <Flex paddingX={4} flexDirection="column" gap={2}>
              <Flex padding={1} borderRadius={4}>
                
              </Flex>
              <Flex>
                <Text>Slider</Text>
              </Flex>
              <Flex>
                <Text>Stats</Text>
              </Flex>
              <Flex>
                <Text>Gallery</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
