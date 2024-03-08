import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import Button from "../../../../../editorComponents/Button";
import { AddAnnouncementBar } from "./AddAnnouncement";
import { useStore } from "zustand";

const Announcement = ({
  announcement,
}: {
  announcement: AddAnnouncementBar;
}) => {
  const an = useStore(announcement.announcement);
  console.log(an.text);
  if (an!.isPresent) {
    return (
      <Flex
        paddingY={2}
        borderBottom="1px solid gray"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Text>{an.text}</Text>
        <Link href={`/${an.link.to}`}>
          <Button text={`${an.link.text}`}></Button>
        </Link>
      </Flex>
    );
  } else {
    return null;
  }
};

export default Announcement;
