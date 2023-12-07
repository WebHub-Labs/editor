import React from "react";
import { useAnnouncementStore } from "../../../../../core/statemanagement";
import { Tree } from "react-arborist";

function Node({ node, style, dragHandle }: any) {
  /* This node instance can do many things. See the API reference. */
  return (
    <div style={style} ref={dragHandle}>
      {node.data.name}
    </div>
  );
}

const AnnouncementSidebar = () => {
  const { isPresent, text } = useAnnouncementStore();
  const data = [
    {
      id: "1",
      name: "Announcement",
      children: [
        { id: "c1", name: "Text" },
        { id: "c2", name: "Link" },
      ],
    },
  ];

  return (
    <>
      <Tree
        initialData={data}
        openByDefault={false}
        // width={600}
        // height="sm"
        // indent={24}
        // rowHeight={36}
        // overscanCount={1}
        // paddingTop={30}
        // paddingBottom={10}
        // padding={25 /* sets both */}
      >
        {Node}
      </Tree>
    </>
  );
};

export default AnnouncementSidebar;
