import Node from "../..";
import {
  AnnouncementBarProps,
  createAnnouncementStore,
} from "../../../../../core/statemanagement/useAnnouncementStore";

export class AddAnnouncementBar extends Node {
  announcement = createAnnouncementStore();
  announcementstate = this.announcement.getState();
  constructor(
    before: Node | null,
    after: Node | null,
    props?: AnnouncementBarProps
  ) {
    super(before, after);
    this.announcement = createAnnouncementStore({ ...props });
    this.announcementstate = this.announcement.getState();
  }
}
