"use client";

import * as React from "react";
import { useState, ReactNode, MouseEvent } from "react";
import { Menu } from "lucide-react";
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

const SheetContent = ({ children, side, className, open }: SheetContentProps) =>
  open ? (
    <div
      className={`fixed top-0 left-0 h-full w-full sm:w-[400px] z-50 flex flex-col p-6 ${
        className || ""
      }`}
      style={{
        background: "#f8f8f8",
        backgroundImage: `
          radial-gradient(circle at 20px 20px, rgba(0,0,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px, 40px 40px, 40px 40px",
        borderRight: "4px solid #1a1a1a",
        boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
        transform: "translateX(0)",
      }}
    >
      {children}
    </div>
  ) : null;

const SheetHeader = ({ children, className }: SheetHeaderProps) => (
  <div className={`mb-6 ${className || ""}`}>{children}</div>
);

const SheetTitle = ({ children }: SheetTitleProps) => (
  <h2
    className="text-3xl font-bold text-black mb-2 relative inline-block"
    style={{
      fontFamily: '"Kalam", cursive',
      transform: "rotate(-1deg)",
    }}
  >
    {children}
    <div
      className="absolute -bottom-2 left-0 h-1 bg-black"
      style={{
        width: "120px",
        borderRadius: "50%",
        transform: "rotate(0.5deg)",
        background:
          "repeating-linear-gradient(90deg, #000 0px, #000 6px, transparent 6px, transparent 10px)",
      }}
    />
  </h2>
);

const SheetDescription = ({ children }: SheetDescriptionProps) => (
  <p
    className="text-gray-700 text-sm"
    style={{
      fontFamily: '"Kalam", cursive',
      transform: "rotate(0.3deg)",
    }}
  >
    {children}
  </p>
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
          className="p-3 hover:bg-gray-100 rounded-md transition-colors relative"
          style={{
            border: "2px solid #1a1a1a",
            borderRadius: "8px",
            boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
            background: "#fefefe",
            transform: "rotate(-1deg)",
          }}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5 text-black" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></div>
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:w-[400px] flex flex-col"
        open={open}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-md z-10"
          style={{
            border: "2px solid #1a1a1a",
            borderRadius: "6px",
            background: "#fefefe",
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <SheetHeader className="flex-shrink-0 relative">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse math topics and concepts</SheetDescription>
          <div
            className="absolute top-4 right-12 w-6 h-0 border-b-2 border-black"
            style={{
              transform: "rotate(-25deg)",
            }}
          >
            <div
              className="absolute right-0 top-0 w-0 h-0"
              style={{
                borderLeft: "6px solid black",
                borderTop: "3px solid transparent",
                borderBottom: "3px solid transparent",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </SheetHeader>

        <div className="mt-4 px-2 relative">
          <Search onSelect={() => setOpen(false)} />
        </div>

        <div className="mt-8 space-y-6 overflow-y-auto flex-1 pr-2 ml-2">
          {MENU_ITEMS.map((menu, menuIndex) => (
            <div
              key={menu.title}
              className="space-y-3 relative p-4"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "2px solid #1a1a1a",
                borderRadius: "10px",
                boxShadow: "3px 3px 0px rgba(0,0,0,0.2)",
                transform: `rotate(${menuIndex % 2 === 0 ? 0.5 : -0.5}deg)`,
              }}
            >
              <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-black" />
              <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-black" />

              <h3
                className="font-bold text-black border-b-2 pb-2 text-center relative"
                style={{
                  fontFamily: '"Kalam", cursive',
                  fontSize: "18px",
                  borderColor: "#1a1a1a",
                  borderStyle: "dashed",
                }}
              >
                {menu.title}
                <div
                  className="absolute -right-2 -top-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    fontFamily: '"Kalam", cursive',
                  }}
                >
                  {menuIndex + 1}
                </div>
              </h3>

              <div className="space-y-2 pl-4">
                {menu.items.map((item, itemIndex) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-black hover:bg-gray-50 rounded px-3 transition-colors group relative"
                    onClick={() => setOpen(false)}
                    style={{
                      border: "1px dashed transparent",
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.border = "1px dashed #ccc";
                      e.currentTarget.style.background =
                        "rgba(240,240,240,0.5)";
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.border = "1px dashed transparent";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div className="flex items-start">
                      <div
                        className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"
                        style={{
                          transform: `rotate(${itemIndex * 30}deg)`,
                        }}
                      />
                      <div>
                        <div
                          className="font-medium group-hover:text-blue-800"
                          style={{
                            fontFamily: '"Kalam", cursive',
                            fontSize: "14px",
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-xs text-gray-600 mt-1"
                          style={{
                            fontFamily: '"Kalam", cursive',
                          }}
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-4 opacity-50">
          <div
            className="inline-block text-xl"
            style={{
              fontFamily: '"Kalam", cursive',
              transform: "rotate(3deg)",
            }}
          >
            📚 ∞
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function DesktopNav() {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:flex items-center relative">
        <div
          className="absolute -left-4 top-1/2 w-3 h-8 border-l-3 border-t-3 border-b-3 border-black"
          style={{
            borderWidth: "2px",
            borderRadius: "4px 0 0 4px",
            transform: "translateY(-50%) rotate(-2deg)",
          }}
        />
        <Search />
        <div
          className="absolute -right-4 top-1/2 w-3 h-8 border-r-3 border-t-3 border-b-3 border-black"
          style={{
            borderWidth: "2px",
            borderRadius: "0 4px 4px 0",
            transform: "translateY(-50%) rotate(2deg)",
          }}
        />
      </div>
    </div>
  );
}

// Add Google Fonts
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
