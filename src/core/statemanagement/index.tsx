import { create } from "zustand";
enum Search {
  Modal,
  NewPage,
  None,
}
type MenuItems = {
  text: string | MenuItems;
  link: string | null;
};
type Cart = {
  isModal: boolean;
  // link: string | null;
};
type ContentState = {
  header: {
    contentHeader: {
      type: {
        logo: string;
        external: string;
        menuItems: string;
      };
      content: {
        logo: { image: string; width: number; transparent: boolean };
        external: {
          search: {
            type: Search;
          };
          cart: { type: Cart };
        };
        menuItems: Array<MenuItems>;
      };
    };
  };
};
