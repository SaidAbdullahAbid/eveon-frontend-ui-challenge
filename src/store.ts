import { create } from "zustand";

type UIState = {
    dark: boolean;
    rtl: boolean;
    toggleDark: () => void;
    toggleRtl: () => void;
};

export const useUIStore = create<UIState>((set: any) => ({
    dark: false,
    rtl: false,
    toggleDark: () => set((state: UIState) => ({ dark: !state.dark })),
    toggleRtl: () => set((state: UIState) => ({ rtl: !state.rtl })),
}));
