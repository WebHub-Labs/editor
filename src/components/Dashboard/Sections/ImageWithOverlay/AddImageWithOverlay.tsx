import Node from "..";
import {
  ImageWithOverlayProps,
  createImageWithOverlayStore,
} from "../../../../core/statemanagement/useImageWithOverlay";

export class AddImageWithOverlay extends Node {
  imageWithOverlay = createImageWithOverlayStore();
  imageWithOverlayState = this.imageWithOverlay.getState();
  constructor(
    before: string | null,
    after: string | null,
    props?: ImageWithOverlayProps
  ) {
    super(before, after);
    this.imageWithOverlay = createImageWithOverlayStore({ ...props });
    this.imageWithOverlayState = this.imageWithOverlay.getState();
  }
}

export default AddImageWithOverlay;
