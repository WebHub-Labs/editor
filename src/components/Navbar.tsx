import React from "react";
import { Text, Box, Flex, Image, Tag, Select } from "@chakra-ui/react";
import { RepeatClockIcon, RepeatIcon } from "@chakra-ui/icons";
import { MdArrowDropDown } from "react-icons/md";

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

const Undo = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <RepeatClockIcon />
      <Text>Undo</Text>
    </Flex>
  );
};
const Redo = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <RepeatIcon />
      <Text>Redo</Text>
    </Flex>
  );
};

const Navbar = () => {
  return (
    <Box
      width="100%"
      position="fixed"
      top={0}
      paddingX={20}
      paddingY={4}
      borderBottom="1px solid gray"
    >
      <Flex justifyContent="start" gap={16}>
        <Flex gap={4}>
          <Logo />
          <Tag size="lg" variant="solid" colorScheme="teal">
            Draft
          </Tag>
          <Flex gap={2}>
            <Undo />
            <Redo />
          </Flex>
        </Flex>
        <Flex>
          <Flex paddingX={4}>
            <Select icon={<MdArrowDropDown />} placeholder="Select Page">
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="newsletter">NewsLetter</option>
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
