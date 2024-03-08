import { createStore } from "zustand";
import { AnnouncementState } from "../../components/Dashboard/Sections/Header/Announcement/AnnouncementState";


interface AnnouncementBarContent extends AnnouncementState {
    updateHeaderIsPresent: (isPresent: boolean) => void;
    updateHeaderText: (text: string) => void;
}


export type AnnouncementStore = ReturnType<typeof createAnnouncementStore>

export const createAnnouncementStore = (initProps?: Partial<AnnouncementState>) => {
    const DEFAULT_PROPS: AnnouncementState = {
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
