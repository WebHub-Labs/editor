import { v4 as uuidv4 } from "uuid";
import { AddAnnouncementBar } from "./Header/Announcement/AddAnnouncement";
import AddNavbar from "./Header/Navbar/AddNavbar";
import AddImageWithOverlay from "./ImageWithOverlay/AddImageWithOverlay";
import AddFeaturedProduct from "./FeaturedProduct/AddFeaturedProduct";

type Element =
  | AddAnnouncementBar
  | AddNavbar
  | AddImageWithOverlay
  | AddFeaturedProduct;

export default class Node {
  nodeId?: string;
  type: string;
  element: Element;
  constructor({ type, element }: { type: string; element: Element }) {
    this.nodeId = uuidv4();
    this.type = type;
    this.element = element;
  }
}
