import { createAnnouncementStore } from "../../../../../core/statemanagement/useAnnouncementStore";
import { AnnouncementBarProps } from "../../../../../core/statemanagement/useAnnouncementStore";

export class AddAnnouncementBar {
  announcementstate = null as any;
  constructor(props?: AnnouncementBarProps) {
    this.announcementstate = createAnnouncementStore({ ...props });
  }
}
