import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import Button from "../../../../../editorComponents/Button";
import { AnnouncementBarProps } from "../../../../../core/statemanagement/useAnnouncementStore";

const Announcement = ({ isPresent, text, link }: AnnouncementBarProps) => {
  if (isPresent) {
    return (
      <Flex
        paddingY={2}
        borderBottom="1px solid gray"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Text>{text}</Text>
        <Link href={`/${link.to}`}>
          <Button text={`${link.text}`}></Button>
        </Link>
      </Flex>
    );
  } else {
    return null;
  }
};

export default Announcement;
