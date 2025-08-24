import { create } from "zustand"

interface ModalState {
  open: boolean;
  modalName: string | null;
  modalProps: any;
  openModal: (modalName: string, modalProps?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  open: false,
  modalName: null,
  modalProps: {},
  openModal: (modalName, modalProps = {}) => set({ open: true, modalName, modalProps }),
  closeModal: () => set({ open: false, modalName: null, modalProps: {} }),
}))
