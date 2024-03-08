import { createAnnouncementStore } from "../../../../../core/statemanagement/useAnnouncementStore";
import { AnnouncementState } from "./AnnouncementState";

export class AddAnnouncementBar {
  announcement = createAnnouncementStore();
  announcementstate = this.announcement.getState();
  constructor(props?: AnnouncementState) {
    this.announcement = createAnnouncementStore({ ...props });
    this.announcementstate = this.announcement.getState();
  }
}
