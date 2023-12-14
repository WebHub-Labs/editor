import { AddAnnouncementBar } from "../../../components/Dashboard/Sections/Header/Announcement/AddAnnouncement";

type MainEditorStateType = {};

export default class MainEditorState {
  mainContent = [
    {
      type: "header",
      header: {
        announcement: new AddAnnouncementBar(),
        header: {
          type: {
            logo: 1,
            menuItems: 2,
            external: 3,
          },
          content: {
            logo: {
              image:
                "https://uploads-ssl.webflow.com/620a1fd6507b821e7b314ba3/620e2c347231df249beaa45f_rara.png",
              width: "500px",
            },
            external: {
              search: {
                type: "modal",
              },
            },
            menuItems: [""],
          },
        },
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
