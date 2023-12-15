import {
  AnnouncementBarProps,
  createAnnouncementStore,
} from "../../../../../core/statemanagement/useAnnouncementStore";

export class AddAnnouncementBar {
  announcement = createAnnouncementStore();
  announcementstate = this.announcement.getState();
  constructor(props?: AnnouncementBarProps) {
    this.announcement = createAnnouncementStore({ ...props });
    this.announcementstate = this.announcement.getState();
  }
}
