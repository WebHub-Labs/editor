import { create } from "zustand";
type Navbar = {
    isTransparent: boolean;
    isPresent: boolean;
    text: string;
};
type Action = {
    updateNavbarTransparent: (isTransparent: boolean) => void;
    updateHeaderIsPresent: (isPresent: boolean) => void;
    updateHeaderText: (text: string) => void;
};

export const useNavbarStore = create<Navbar & Action>((set) => ({
    isPresent: true,
    text: "Announcement",
    isTransparent: false,

    updateNavbarTransparent: (isTransparent: boolean) =>
        set(() => ({ isTransparent: isTransparent })),
    updateHeaderIsPresent: (isPresent: boolean) =>
        set(() => ({ isPresent: isPresent })),
    updateHeaderText: (text: string) => set(() => ({ text: text })),
}));