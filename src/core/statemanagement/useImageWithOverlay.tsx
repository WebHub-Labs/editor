import { createStore } from "zustand";

export type ImageWithOverlayProps = {
  imageLink: string;
  text: string;
  button: {
    text: string;
    link: string;
  };
};

interface ImageOverlayContent extends ImageWithOverlayProps {
  updateOverlayHeaderText: (text: string) => void;
  updateOverlayButtonText: (text: string) => void;
}

export const createImageWithOverlayStore = (
  initProps?: Partial<ImageWithOverlayProps>
) => {
  const DEFAULT_PROPS: ImageWithOverlayProps = {
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
