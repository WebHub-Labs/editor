import { AddAnnouncementBar } from "../../../components/Dashboard/Sections/Header/Announcement/AddAnnouncement";
import AddNavbar from "../../../components/Dashboard/Sections/Header/Navbar/AddNavbar";

type MainEditorStateType = {};

export default class MainEditorState {
  mainContent = [
    {
      type: "header",
      header: {
        announcement: new AddAnnouncementBar(),
        header: new AddNavbar(),
      },
    },
    {
      type: "image_banner_with_text",
      hero: {
        imageLink: "",
        text: "Talk about your brand",
        button: {
          text: "Shop",
          link: "/",
        },
      },
    },
  ];
  constructor() {
    const announcementBar = new AddAnnouncementBar({
      isPresent: true,
      text: "Sales to",
      link: { text: "Shop", to: "/shop" },
    });

    this.addAnnouncement(announcementBar);
  }

  addAnnouncement(announcementBar: AddAnnouncementBar) {
    this.mainContent[0]!.header!.announcement = announcementBar;
  }
}

export {};
