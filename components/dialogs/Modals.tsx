"use client";

import React from "react";
import { useModalStore } from "@/lib/store/modalStore";
import { CreateEditProjectDialog } from "@/components/dialogs/project/CreateEditProjectDialog";
import { CreateEditPageDialog } from "@/components/dialogs/page/CreateEditPageDialog";
import { ConfirmationDialog } from "@/components/dialogs/confirmation/ConfirmationDialog";
import { CreateBlockDialog } from "@/components/dialogs/CreateBlockDialog";
import { CreateEditCollectionDialog } from "@/components/dialogs/CreateEditCollectionDialog";
import { ManageFieldsDialog } from "@/components/dialogs/ManageFieldsDialog";
import { DeleteCollectionDialog } from "@/components/dialogs/DeleteCollectionDialog";
import { CollectionItemEditDialog } from "@/components/dialogs/CollectionItemEditDialog";

// Modal registry
const modals: Record<string, React.ComponentType<any>> = {
  createProject: CreateEditProjectDialog,
  editProject: CreateEditProjectDialog,
  createPage: CreateEditPageDialog,
  editPage: CreateEditPageDialog,
  confirmation: ConfirmationDialog,
  createBlock: CreateBlockDialog,
  createEditCollection: CreateEditCollectionDialog,
  manageFields: ManageFieldsDialog,
  deleteCollection: DeleteCollectionDialog,
  editCollectionItem: CollectionItemEditDialog,
  // Add more dialogs here as needed
};

export interface ModalsProps {
  modalName: string;
  modalProps: any;
  open: boolean;
  onClose: () => void;
}

export function Modals() {
  const { open, modalName, modalProps, closeModal } = useModalStore();
  console.log({ modalName, modalProps, open });
  const ModalComponent = modalName ? modals[modalName] : null;
  console.log({ open });
  if (!ModalComponent) return null;
  return <ModalComponent {...modalProps} isOpen={open} onClose={closeModal} />;
}
