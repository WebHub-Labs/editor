import {
    createImageWithOverlayStore,
} from "../../../../core/statemanagement/useImageWithOverlay";
import { ImageWithOverlayState } from "./ImageWithOverlayState";

export class AddImageWithOverlay {
  imageWithOverlay = createImageWithOverlayStore();
  imageWithOverlayState = this.imageWithOverlay.getState();
  constructor(props?: ImageWithOverlayState) {
    this.imageWithOverlay = createImageWithOverlayStore({ ...props });
    this.imageWithOverlayState = this.imageWithOverlay.getState();
  }
}

export default AddImageWithOverlay;
