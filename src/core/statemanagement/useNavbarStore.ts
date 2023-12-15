import { createStore } from "zustand";

export type NavbarProps = {
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

interface NavbarContent extends NavbarProps {
    updateHeaderIsPresent: (isPresent: boolean) => void;
    updateHeaderText: (text: string) => void;
}

export const createNavbarStore = (initProps?: Partial<NavbarProps>) => {
    const DEFAULT_PROPS: NavbarProps = {
        isPresent: true,
        text: "Navbar",
        isTransparent: false,
        type: {
            logo: 1,
            menuItems: 2,
            external: 3,
        },
        content: {
            logo: {
                image: "https://seeklogo.com/images/O/open-ai-logo-FB5E1C8309-seeklogo.com.png",
                width: "200px",
            },
            external: {
                search: {
                    type: "modal",
                },
            },
            // menuItems: string[];
        },
    }
    return createStore<NavbarContent>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        updateNavbarTransparent: (isTransparent: boolean) =>
            set(() => ({ isTransparent: isTransparent })),
        updateHeaderIsPresent: (isPresent: boolean) =>
            set(() => ({ isPresent: isPresent })),
        updateHeaderText: (text: string) => set(() => ({ text: text })),
    }))
}