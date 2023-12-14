import { createStore } from "zustand";
export type AnnouncementBarProps = {
    isPresent: boolean;
    text: string;
    link: {
        text: string;
        to: string;
    }
};

interface AnnouncementBarContent extends AnnouncementBarProps {
    updateHeaderIsPresent: (isPresent: boolean) => void;
    updateHeaderText: (text: string) => void;
}


export type AnnouncementStore = ReturnType<typeof createAnnouncementStore>

export const createAnnouncementStore = (initProps?: Partial<AnnouncementBarProps>) => {
    const DEFAULT_PROPS: AnnouncementBarProps = {
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
