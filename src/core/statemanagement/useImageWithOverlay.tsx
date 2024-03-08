import { createStore } from "zustand";
import { ImageWithOverlayState } from "../../components/Dashboard/Sections/ImageWithOverlay/ImageWithOverlayState";

interface ImageOverlayContent extends ImageWithOverlayState {
  updateOverlayHeaderText: (text: string) => void;
  updateOverlayButtonText: (text: string) => void;
}

export const createImageWithOverlayStore = (
  initProps?: Partial<ImageWithOverlayState>
) => {
  const DEFAULT_PROPS: ImageWithOverlayState = {
    imageLink:
      "https://madebyevan.com/figma/building-a-professional-design-tool-on-the-web/0.png",
    text: "Talk about your brand",
    button: {
      text: "Shop Now",
      link: "#",
    },
  };
  return createStore<ImageOverlayContent>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    updateOverlayHeaderText: (text: string) => set(() => ({ text: text })),
    updateOverlayButtonText: (text: string) => set(() => ({ text: text })),
  }));
};
