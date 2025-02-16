'use client';

import * as React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

// const MenubarMenu = Menubar.Menu
// const MenubarSub = Menubar.Sub

const MenubarRoot = React.forwardRef<
  React.ElementRef<typeof Menubar.Root>,
  React.ComponentPropsWithoutRef<typeof Menubar.Root>
>(({ className, ...props }, ref) => (
  <Menubar.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
));
MenubarRoot.displayName = Menubar.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof Menubar.Trigger>,
  React.ComponentPropsWithoutRef<typeof Menubar.Trigger>
>(({ className, ...props }, ref) => (
  <Menubar.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = Menubar.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof Menubar.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Menubar.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <Menubar.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </Menubar.SubTrigger>
));
MenubarSubTrigger.displayName = Menubar.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof Menubar.SubContent>,
  React.ComponentPropsWithoutRef<typeof Menubar.SubContent>
>(({ className, ...props }, ref) => (
  <Menubar.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = Menubar.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof Menubar.Content>,
  React.ComponentPropsWithoutRef<typeof Menubar.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <Menubar.Portal>
      <Menubar.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </Menubar.Portal>
  )
);
MenubarContent.displayName = Menubar.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof Menubar.Item>,
  React.ComponentPropsWithoutRef<typeof Menubar.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Menubar.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = Menubar.Item.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof Menubar.Separator>,
  React.ComponentPropsWithoutRef<typeof Menubar.Separator>
>(({ className, ...props }, ref) => (
  <Menubar.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MenubarSeparator.displayName = Menubar.Separator.displayName;
