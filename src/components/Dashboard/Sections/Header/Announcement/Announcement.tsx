import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../../../../../editorComponents/Button";

const Announcement = () => {
  return (
    <Flex
      paddingY={2}
      borderBottom="1px solid gray"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Text>Sales is currently running</Text>
      <Link href="/shop">
        <Button text=" Shop Now"></Button>
      </Link>
    </Flex>
  );
};

export default Announcement;
