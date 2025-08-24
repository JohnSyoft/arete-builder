"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import React from "react"

export interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

export function ConfirmationDialog({ open, onClose, title, message, confirmText = "Confirm", cancelText = "Cancel", onConfirm }: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-muted-foreground">{message}</div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>{cancelText}</Button>
          <Button onClick={() => { onConfirm(); onClose(); }}>{confirmText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
