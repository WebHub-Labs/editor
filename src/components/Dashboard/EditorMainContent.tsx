import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import Announcement from "./Sections/Header/Announcement/Announcement";
import Navbar from "./Sections/Header/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import FeaturedProduct from "./Sections/FeaturedProduct/FeaturedProduct";
import { EditorContext } from "../../App";

export const EditorMainContent = ({ page }: any) => {
  const content = useContext(EditorContext);
  // console.log(content);
  return (
    <Flex overflow="scroll" flexDirection="column" padding={2}>
      {content!.mainContent?.map((content: any) => {
        if (content.type === "header") {
          const {
            isPresent: announcementIsPresent,
            text: announcementText,
            link: announcementLink,
          } = content.header?.announcement?.announcementstate?.getState();
          return (
            <>
              <Announcement
                isPresent={announcementIsPresent}
                text={announcementText}
                link={announcementLink}
              />
              <Navbar />
            </>
          );
        } else if (content.type === "image_banner_with_text") {
          // const {imageLink, text, buttonLink, buttonText }= content?.hero as
          return <Hero />;
        }
      })}

      <FeaturedProduct />
    </Flex>
  );
};

export default EditorMainContent;
