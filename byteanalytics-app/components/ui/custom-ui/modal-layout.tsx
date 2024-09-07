'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../button';
import React from 'react';
import { useAppContext } from '@/lib/context/app';

export const ModalWrapper = ({
  children,
  style,
  title,
  trigger,
  description,
}: {
  children: React.ReactNode;
  style?: string;
  title?: React.ReactNode;
  description?: string;
  trigger: React.ReactNode;
}) => {
  const { modalCloseTrigger } = useAppContext();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={`${
          style ? style : 'sm:max-w-[425px]'
        } overflow-y-scroll max-h-screen`}
      >
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-start hidden">
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-white text-white"
              ref={modalCloseTrigger}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
