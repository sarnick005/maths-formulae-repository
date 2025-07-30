"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "./Search";
import { MENU_ITEMS } from "@/utils/MenuItems";


const ListItem = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
      >
        <div className="text-sm font-medium leading-none text-black">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] flex flex-col "
      >
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse math topics and concepts</SheetDescription>
        </SheetHeader>
        <div className="mt-4 px-2">
          <Search onSelect={() => setOpen(false)} />
        </div>
        <div className="mt-6 space-y-4 overflow-y-auto flex-1 pr-2 ml-2">
          {MENU_ITEMS.map((menu) => (
            <div key={menu.title} className="space-y-2">
              <h3 className="font-semibold text-black border-b pb-2 text-center">
                {menu.title}
              </h3>
              <div className="space-y-1 pl-4">
                {menu.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded px-2 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-1">
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
    <div className="flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {MENU_ITEMS.map((menu) => (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuTrigger className="text-black hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 px-4 py-2 font-medium bg-white">
                {menu.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[500px] p-4 max-w-[90vw]">
                  {menu.items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden md:flex items-center">
        <Search />
      </div>
    </div>
  );
}
