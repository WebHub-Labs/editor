export type NavbarState = {
  isPresent: boolean;
  isTransparent: boolean;
  text: string;
  type: {
    logo: number;
    menuItems: number;
    external: number;
  };
  content: {
    logo: {
      image: string;
      width: string;
    };
    external: {
      search: {
        type: string;
      };
    };
    // menuItems: string[];
  };
};
