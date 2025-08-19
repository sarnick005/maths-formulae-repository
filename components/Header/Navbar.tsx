"use client";

import * as React from "react";
import { useState, ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Search } from "./Search";
import { MENU_ITEMS } from "@/utils/MenuItems";

// Types
interface SheetProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SheetTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

interface SheetContentProps {
  children: ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  open: boolean;
}

interface SheetHeaderProps {
  children: ReactNode;
  className?: string;
}

interface SheetTitleProps {
  children: ReactNode;
}

interface SheetDescriptionProps {
  children: ReactNode;
}

// Components
const Sheet = ({ children, open, onOpenChange }: SheetProps) => (
  <div>
    {children}
    {open && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => onOpenChange(false)}
      />
    )}
  </div>
);

const SheetTrigger = ({ children }: SheetTriggerProps) => children;

const SheetContent = ({
  children,
  side = "left",
  className = "",
  open,
}: SheetContentProps) =>
  open ? (
    <div
      className={`fixed top-0 left-0 h-full w-full sm:w-[400px] z-50 bg-white border-r flex flex-col p-6 ${className}`}
    >
      {children}
    </div>
  ) : null;

const SheetHeader = ({ children, className = "" }: SheetHeaderProps) => (
  <div className={`mb-6 ${className}`}>{children}</div>
);

const SheetTitle = ({ children }: SheetTitleProps) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

const SheetDescription = ({ children }: SheetDescriptionProps) => (
  <p className="text-sm text-muted-foreground">{children}</p>
);

export function MobileNav() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:w-[400px] flex flex-col"
        open={open}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-md"
        >
          <X className="w-4 h-4" />
        </button>

        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse math topics and concepts</SheetDescription>
        </SheetHeader>

        <div className="mb-6">
          <Search onSelect={() => setOpen(false)} />
        </div>

        <div className="space-y-6 overflow-y-auto flex-1">
          {MENU_ITEMS.map((menu) => (
            <div key={menu.title} className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                {menu.title}
              </h3>
              <div className="space-y-1 pl-4">
                {menu.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function DesktopNav() {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:flex items-center">
        <Search />
      </div>
    </div>
  );
}
