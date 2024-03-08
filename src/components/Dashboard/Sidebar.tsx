import React, { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiFillLayout } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import AnnouncementSidebar from "./Sections/Header/Announcement";
import NavbarSidebar from "./Sections/Header/Navbar";
import { EditorContext } from "../../App";
import { AddAnnouncementBar } from "./Sections/Header/Announcement/AddAnnouncement";

const Sidebar = () => {
  const mainEditorState = useContext(EditorContext);
  return (
    <>
      <Flex
        position="fixed"
        left={0}
        minWidth="300px"
        maxWidth="lg"
        height="calc( 100vh - 70px )"
        boxShadow="1px 0px 1px 1px #aeaaaa"
      >
        <Flex
          position="relative"
          flexDirection="column"
          // padding={}
          gap={4}
          width="100%"
        >
          <Flex
            position="absolute"
            left="0"
            top="0"
            flexDirection="column"
            gap={2}
          >
            <Flex padding={2}>
              <Text fontWeight="bold">Sections</Text>
            </Flex>
            <Flex
              paddingX={4}
              justifyContent="center"
              flexDirection="column"
              gap={2}
            >
              {mainEditorState!.mainContent?.map((content) => {
                if (content.type === "announcement") {
                  return (
                    <AnnouncementSidebar
                      announcement={
                        (content.element as AddAnnouncementBar)
                      }
                    />
                  );
                } else if (content.type === "header") {
                  return <NavbarSidebar />;
                } else if (content.type === "image_banner_with_text") {
                } else if (content.type === "featured_product") {
                }
                return null;
              })}
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
