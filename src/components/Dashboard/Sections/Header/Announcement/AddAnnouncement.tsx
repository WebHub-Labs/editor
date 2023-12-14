import { createAnnouncementStore } from "../../../../../core/statemanagement/useAnnouncementStore";
import { AnnouncementBarContent } from "../../../../../core/statemanagement/useAnnouncementStore";

export class AddAnnouncementBar {
  announcementstate = {};
  constructor(props?: AnnouncementBarContent) {
    this.announcementstate = createAnnouncementStore({ ...props });
  }
}
