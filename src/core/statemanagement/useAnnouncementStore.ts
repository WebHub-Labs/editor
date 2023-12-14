import { createStore } from "zustand";
export type AnnouncementBarContent = {
    isPresent: boolean;
    text: string;
    link: {
        text: string;
        to: string;
    }
};
type Action = {
    updateHeaderIsPresent: (isPresent: boolean) => void;
    updateHeaderText: (text: string) => void;
};

export type AnnouncementStore = ReturnType<typeof createAnnouncementStore>

export const createAnnouncementStore = (initProps?: Partial<AnnouncementBarContent>) => {
    const DEFAULT_PROPS: AnnouncementBarContent = {
        isPresent: false,
        text: "Sales",
        link: {
            text: "Shop Now",
            to: "/shop",
        },
    }
    return createStore<AnnouncementBarContent>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        updateHeaderIsPresent: (isPresent: boolean) =>
            set(() => ({ isPresent: isPresent })),
        updateHeaderText: (text: string) => set(() => ({ text: text })),
    }))
}
