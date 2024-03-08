export interface AnnouncementState {
  isPresent: boolean;
  text: string;
  link: {
    text: string;
    to: string;
  };
}
