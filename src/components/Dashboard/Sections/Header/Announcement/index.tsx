import React, { useContext } from "react";
import { Tree } from "react-arborist";
// import { useAnnouncementStore } from "../../../../../core/statemanagement/useAnnouncementStore";
import { Input, Text } from "@chakra-ui/react";
import { EditorContext } from "../../../../../App";
import Announcement from "./Announcement";
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

  console.log(mainEditorState);

  const text = announcement?.announcementstate.getState().text;
  const isPresent = announcement?.announcementstate?.getState().isPresent;
  const setText = announcement?.announcementstate?.getState().updateHeaderText;

  return (
    <>
      <Text>Announcement</Text>
      <Text mb="8px">Value: {text}</Text>
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
