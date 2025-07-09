import { create } from "zustand";
import type { IOpenDialogKey } from "~/types/app-dialog";

interface IAppDialogState {
    openDialogKey: IOpenDialogKey;
    onOpen: (key: IOpenDialogKey) => void;
    onClose: () => void;
}

export const useAppDialog = create<IAppDialogState>()((set) => ({
    openDialogKey: null,
    onOpen: (key) => set({ openDialogKey: key }),
    onClose: () => set({ openDialogKey: null }),
}));
