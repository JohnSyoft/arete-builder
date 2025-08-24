"use client"

import React from "react"
import { useModalStore } from "@/lib/store/modalStore"
import { CreateEditProjectDialog } from "@/components/dialogs/project/CreateEditProjectDialog"
import { ConfirmationDialog } from "@/components/dialogs/confirmation/ConfirmationDialog"

// Modal registry
const modals: Record<string, React.ComponentType<any>> = {
  createProject: CreateEditProjectDialog,
  editProject: CreateEditProjectDialog,
  confirmation: ConfirmationDialog,
  // Add more dialogs here as needed
}

export interface ModalsProps {
  modalName: string;
  modalProps: any;
  open: boolean;
  onClose: () => void;
}

export function Modals() {
  const { open, modalName, modalProps, closeModal } = useModalStore();
  const ModalComponent = modalName ? modals[modalName] : null;
  console.log({open})
  if (!ModalComponent) return null;
  return <ModalComponent {...modalProps} open={open} onClose={closeModal} />;
}
