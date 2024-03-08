import { createStore } from "zustand";
import { AddAnnouncementBar } from "../../../components/Dashboard/Sections/Header/Announcement/AddAnnouncement";
import AddNavbar from "../../../components/Dashboard/Sections/Header/Navbar/AddNavbar";
import AddImageWithOverlay from "../../../components/Dashboard/Sections/ImageWithOverlay/AddImageWithOverlay";
import Node from "../../../components/Dashboard/Sections";
import FeaturedProduct from "../../../components/Dashboard/Sections/FeaturedProduct/FeaturedProduct";
import AddFeaturedProduct from "../../../components/Dashboard/Sections/FeaturedProduct/AddFeaturedProduct";

type EditorStoreProps = { mainContent: Array<Node> };

export default class MainEditorState {
  mainContent: Array<Node> = [];
  constructor() {
    const announcementBar = new AddAnnouncementBar({
      isPresent: true,
      text: "Sales to rohit",
      link: { text: "Shop", to: "/shop" },
    });
    const navBar = new AddNavbar({
      isPresent: true,
      text: "Navbar",
      isTransparent: false,
      type: {
        logo: 1,
        menuItems: 2,
        external: 3,
      },
      content: {
        logo: {
          image:
            "https://seeklogo.com/images/O/open-ai-logo-FB5E1C8309-seeklogo.com.png",
          width: "200px",
        },
        external: {
          search: {
            type: "modal",
          },
        },
        // menuItems: string[];
      },
    });

    const imageWithOverlay = new AddImageWithOverlay({
      imageLink:
        "https://madebyevan.com/figma/building-a-professional-design-tool-on-the-web/0.png",
      text: "Talk about your brand",
      button: {
        text: "Shop Right Now",
        link: "#",
      },
    });
    const featuredProduct = new AddFeaturedProduct({
      isPresent: true,
      headerText: "Featured Product",
      subHeaderText:
        "Our sleek and sophisticated induction cooker is designed to elevate your cooking experience. Its slim and stylish profile seamlessly blends into any modern kitchen.",
      content: {
        image: {
          url: "https://cdn.blanxer.com/uploads/63c7c5c7179af50e6707c23b/product_image-induction3-1036.png",
          width: "600px",
        },
        name: "Omega 1.0 Ton Wall Mounted Air Conditioner With Free Installation",
        MRP: "रू 5,000",
        sellingPrice: "रू 4,799",
        priceOff: "4% OFF",
      },
    });

    this.mainContent.push({ type: "announcement", element: announcementBar });
    this.mainContent.push({ type: "navbar", element: navBar });
    this.mainContent.push({
      type: "image_banner_with_text",
      element: imageWithOverlay,
    });
    this.mainContent.push({
      type: "featured_product",
      element: featuredProduct,
    });
  }
}

interface EditorStoreContent extends EditorStoreProps {
  addAnnouncement(announcementBar: AddAnnouncementBar): void;
  addNavbar(navbar: AddNavbar): void;
  addImageWithOverlay(imageWithOverlay: AddImageWithOverlay): void;
}

export type EditorStore = ReturnType<typeof createEditorStore>;

export const createEditorStore = (initProps: Partial<EditorStoreProps>) => {
  const DEFAULT_PROPS: EditorStoreProps = { mainContent: [] };

  return createStore<EditorStoreContent>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addAnnouncement(announcementBar: AddAnnouncementBar) {},
    addNavbar(navbar: AddNavbar) {},
    addImageWithOverlay(imageWithOverlay: AddImageWithOverlay) {},
  }));
};
