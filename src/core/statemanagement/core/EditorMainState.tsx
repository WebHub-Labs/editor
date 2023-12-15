import { createStore } from "zustand";
import { AddAnnouncementBar } from "../../../components/Dashboard/Sections/Header/Announcement/AddAnnouncement";
import AddNavbar from "../../../components/Dashboard/Sections/Header/Navbar/AddNavbar";
import AddImageWithOverlay from "../../../components/Dashboard/Sections/ImageWithOverlay/AddImageWithOverlay";

type Element = AddAnnouncementBar | AddNavbar | AddImageWithOverlay;

type Node = {
  type: string;
  element: Element;
};

type EditorStoreProps = { mainContent: Array<Node> };

export default class MainEditorState {
  mainContent = [
    {
      type: "announcement",
      element: new AddAnnouncementBar(null, null),
    },
    {
      type: "navbar",
      element: new AddNavbar(null, null),
    },
    {
      type: "image_banner_with_text",
      // element: new AddIma,
    },
  ];
  constructor() {
    const announcementBar = new AddAnnouncementBar(null, null, {
      isPresent: true,
      text: "Sales to",
      link: { text: "Shop", to: "/shop" },
    });
    const navBar = new AddNavbar(null, null, {
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
    announcementBar.addBefore(navBar);
    navBar.addAfter(announcementBar);
    // this.addAnnouncement(announcementBar);
  }
}

interface EditorStoreContent extends EditorStoreProps {
  // addAnnouncement(
  //   announcementBar: AddAnnouncementBar,
  //   before?: Node,
  //   after?: Node
  // ): void;
  // addNavbar(navbar: AddNavbar, before?: Node, after?: Node): void;
  // addImageWithOverlay(
  //   imageWithOverlay: AddImageWithOverlay,
  //   before?: Node,
  //   after?: Node
  // ): void;
}

export type EditorStore = ReturnType<typeof createEditorStore>;

export const createEditorStore = (initProps: Partial<EditorStoreProps>) => {
  const DEFAULT_PROPS: EditorStoreProps = { mainContent: [] };

  return createStore<EditorStoreContent>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addAnnouncement(
      announcementBar: AddAnnouncementBar,
      before?: Node,
      after?: Node
    ) {
      // this.mainContent[0].element = announcementBar;
    },
    addNavbar(navbar: AddNavbar) {
      // mainContent[1].element = navbar;
    },
    addImageWithOverlay(
      imageWithOverlay: AddImageWithOverlay,
      before?: Node,
      after?: Node
    ) {},
  }));
};
