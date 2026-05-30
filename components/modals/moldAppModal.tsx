"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface MoldAppDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MoldAppDialog({
  open,
  onOpenChange,
}: MoldAppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mold App</DialogTitle>
        </DialogHeader>

        <p>
          Descrição detalhada do projeto, screenshots, tecnologias,
          links para GitHub e demo.
        </p>
      </DialogContent>
    </Dialog>
  )
}