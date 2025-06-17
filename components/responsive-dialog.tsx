"use client";
import {  useIsMobile } from "@/hooks/use-mobile";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { is } from "drizzle-orm";

interface ResponsiveDialogProps {
  title: string;
  description: string;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveDialog = ({
  title,
  description,
  children,
  open,
  onOpenChange,
}: ResponsiveDialogProps) => {

    const isMobile = useIsMobile()
     
    if(isMobile){
        return(
            <Drawer open={open} onOpenChange={onOpenChange}>
              <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="tracking-tight">{title}</DrawerTitle>
                    <DrawerDescription className="tracking-tight">{description}</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    {children}
                </div>
              </DrawerContent>
            </Drawer>
        )
    }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="tracking-tight">{title}</DialogTitle>
                <DialogDescription className="tracking-tight">{description}</DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>

    </Dialog>
  );
};
