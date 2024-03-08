import React from "react";
import { Input, Text } from "@chakra-ui/react";
import { AddAnnouncementBar } from "./AddAnnouncement";
import { useStore } from "zustand";

const AnnouncementSidebar = ({
  announcement,
}: {
  announcement: AddAnnouncementBar;
}) => {
  const an = useStore(announcement.announcement);
  const text = an.text;
  const isPresent = an.isPresent;  
  const setText = an.updateHeaderText;
  return (
    <>
      <Text>Announcement</Text>
      <Input
        value={text}
        onChange={(event) => {
          const value = event.target.value;
          an.updateHeaderText(value);
          console.log(an);
        }}
      ></Input>
    </>
  );
};

export default AnnouncementSidebar;
