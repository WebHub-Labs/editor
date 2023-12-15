import React, { useContext } from "react";
import { Input, Text } from "@chakra-ui/react";
import { EditorContext } from "../../../../../App";
import { useStore } from "zustand";

function Node({ node, style, dragHandle }: any) {
  /* This node instance can do many things. See the API reference. */
  return (
    <div style={style} ref={dragHandle}>
      {node.data.name}
    </div>
  );
}

const AnnouncementSidebar = () => {
  const mainEditorState = useContext(EditorContext);
  const announcement = mainEditorState?.mainContent[0].header?.announcement;
  const an = useStore(announcement!.announcement);
  const text = an!.text;
  const isPresent = an!.isPresent;
  const setText = an?.updateHeaderText;
  return (
    <>
      <Text>Announcement</Text>
      <Input
        value={text}
        onChange={(event) => {
          const value = event.target.value;
          setText(value);
        }}
      ></Input>
    </>
  );
};

export default AnnouncementSidebar;
