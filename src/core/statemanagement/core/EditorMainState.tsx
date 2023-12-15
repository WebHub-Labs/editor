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
    // {
    //   type: "image_banner_with_text",
    //   element: new AddImageWithOverlay(null, null),
    // },
  ];
  constructor() {
    const announcementBar = new AddAnnouncementBar(null, null, {
      isPresent: true,
      text: "Sales to rohit",
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

    const imageWithOverlay = new AddImageWithOverlay(null, null, {
      imageLink:
        "https://madebyevan.com/figma/building-a-professional-design-tool-on-the-web/0.png",
      text: "Talk about your brand",
      button: {
        text: "Shop Right Now",
        link: "#",
      },
    });
    announcementBar.addAfter(navBar);
    navBar.addBefore(announcementBar);
    // navBar.addAfter(imageWithOverlay);
    // imageWithOverlay.addBefore(navBar);

    this.mainContent[0].element = announcementBar;
    this.mainContent[1].element = navBar;
    // this.mainContent[2].element = imageWithOverlay;
    this.addImageWithOverlay(imageWithOverlay, this.mainContent[0], null);
  }

  addImageWithOverlay(
    imageWithOverlay: AddImageWithOverlay,
    before: Node | null,
    after: Node | null
  ) {
    let i = 0;
    let n = this.mainContent.length;
    let beforeNodes: any = [];
    while (i < n) {
      if (this.mainContent[i].element.after !== before?.element.id) {
        beforeNodes.push(this.mainContent[i]);
      } else if (this.mainContent[i].element.after === before?.element.id) {
        continue;
      }
      i++;
    }
    let afterNodes: any = [];

    while (i < n) {
      afterNodes.push(this.mainContent[i]);
    }
    // if (before != null) {
    //   beforeNodes.push(before);
    // } else {
    //   beforeNodes.push(after);
    // }

    console.log(beforeNodes);
    if (before !== null) {
      imageWithOverlay.addBefore(before.element);
    }
    this.mainContent = [
      ...beforeNodes,
      { type: "imagewithoverlay", element: imageWithOverlay },
    ];

    console.log(this.mainContent);
  }
}

interface EditorStoreContent extends EditorStoreProps {
  addAnnouncement(
    announcementBar: AddAnnouncementBar,
    before: Node | null,
    after: Node | null
  ): void;
  addNavbar(navbar: AddNavbar, before: Node | null, after: Node | null): void;
  addImageWithOverlay(
    imageWithOverlay: AddImageWithOverlay,
    before: Node | null,
    after: Node | null
  ): void;
}

export type EditorStore = ReturnType<typeof createEditorStore>;

export const createEditorStore = (initProps: Partial<EditorStoreProps>) => {
  const DEFAULT_PROPS: EditorStoreProps = { mainContent: [] };

  return createStore<EditorStoreContent>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addAnnouncement(
      announcementBar: AddAnnouncementBar,
      before: Node | null,
      after: Node | null
    ) {
      // this.mainContent[0].element = announcementBar;
    },
    addNavbar(navbar: AddNavbar) {
      // mainContent[1].element = navbar;
    },
    addImageWithOverlay(
      imageWithOverlay: AddImageWithOverlay,
      before: Node | null,
      after: Node | null
    ) {
      const beforeNodes = this.mainContent.map((node) => {
        while (node.element.after !== before) {
          console.log(node);
        }
      });
    },
  }));
};
