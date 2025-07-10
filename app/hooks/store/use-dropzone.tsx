import { create } from "zustand";

interface IDropzoneState {
    isDragActive: boolean;
    setIsDragActive: (active: boolean) => void;
}

export const useDropzoneStore = create<IDropzoneState>((set) => ({
    isDragActive: false,
    setIsDragActive: (active) => set({ isDragActive: active }),
}));
