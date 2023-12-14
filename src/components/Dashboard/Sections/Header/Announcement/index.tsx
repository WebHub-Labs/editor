import React, { useContext } from "react";
import { Tree } from "react-arborist";
// import { useAnnouncementStore } from "../../../../../core/statemanagement/useAnnouncementStore";
import { Input, Text } from "@chakra-ui/react";
import { EditorContext } from "../../../../../App";

function Node({ node, style, dragHandle }: any) {
  /* This node instance can do many things. See the API reference. */
  return (
    <div style={style} ref={dragHandle}>
      {node.data.name}
    </div>
  );
}

const AnnouncementSidebar = () => {
  const mainEditorState = useContext(EditorContext)
  const announcement = mainEditorState?.mainContent[0].header?.announcement
  return (
    <>
      <Text>Announcement</Text>
      <Input value={announcement?.announcementstate?.} onChange={(value) => {
        announcement?.text = value
      }}></Input>
    </>
  );
};

export default AnnouncementSidebar;
