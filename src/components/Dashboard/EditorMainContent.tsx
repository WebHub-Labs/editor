import { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import Announcement from "./Sections/Header/Announcement/Announcement";
import Navbar from "./Sections/Header/Navbar/Navbar";
import Hero from "./Sections/ImageWithOverlay/ImageWithOverlay";
import FeaturedProduct from "./Sections/FeaturedProduct/FeaturedProduct";
import { EditorContext } from "../../App";
import { AddAnnouncementBar } from "./Sections/Header/Announcement/AddAnnouncement";
import AddImageWithOverlay from "./Sections/ImageWithOverlay/AddImageWithOverlay";
import AddFeaturedProduct from "./Sections/FeaturedProduct/AddFeaturedProduct";

export const EditorMainContent = ({ page }: any) => {
  const content = useContext(EditorContext);
  console.log(content?.mainContent);
  return (
    <Flex overflow="scroll" flexDirection="column" padding={2}>
      {content!.mainContent?.map((content) => {
        if (content.type === "announcement") {
          return (
            <Announcement
              announcement={content.element as AddAnnouncementBar}
            />
          );
        } else if (content.type === "header") {
          return <Navbar />;
        } else if (content.type === "image_banner_with_text") {
          return (
            <Hero imageWithOverlay={content.element as AddImageWithOverlay} />
          );
        } else if (content.type === "featured_product") {
          return <FeaturedProduct featuredProduct={ content.element as  AddFeaturedProduct} />;
        }
        return null;
      })}
    </Flex>
  );
};

export default EditorMainContent;
