import { createStore } from "zustand";
import { FeaturedProductState } from "../../components/Dashboard/Sections/FeaturedProduct/FeaturedProductState";

interface FeaturedProductContent extends FeaturedProductState {
  updateHeaderIsPresent: (isPresent: boolean) => void;
  updateHeaderText: (text: string) => void;
}

export type AnnouncementStore = ReturnType<typeof createFeaturedProductStore>;

export const createFeaturedProductStore = (
  initProps?: Partial<FeaturedProductState>
) => {
  const DEFAULT_PROPS: FeaturedProductState = {
    isPresent: true,
    headerText: "Featured Product",
    subHeaderText:
      "Our sleek and sophisticated induction cooker is designed to elevate your cooking experience. Its slim and stylish profile seamlessly blends into any modern kitchen.",
    content: {
      image: {
        url: "https://cdn.blanxer.com/uploads/63c7c5c7179af50e6707c23b/product_image-induction3-1036.png",
        width: "600px",
      },
      name: "Omega 1.0 Ton Wall Mounted Air Conditioner With Free Installation",
      MRP: "रू 5,000",
      sellingPrice: "रू 4,799",
      priceOff: "4% OFF",
    },
  };
  return createStore<FeaturedProductContent>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    updateHeaderIsPresent: (isPresent: boolean) =>
      set(() => ({ isPresent: isPresent })),
    updateHeaderText: (text: string) => set(() => ({ headerText: text })),
  }));
};
