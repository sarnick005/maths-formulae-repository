"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MENU_ITEMS } from "./Navbar";

type SearchProps = {
  onSelect?: () => void;
};

export function Search({ onSelect }: SearchProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Search for any topic..."
        value={searchValue}
        onValueChange={setSearchValue}
        autoFocus={false}
      />
      <CommandList>
        {searchValue && <CommandEmpty>No results found.</CommandEmpty>}
        {searchValue &&
          MENU_ITEMS.map((category) => (
            <CommandGroup key={category.title} heading={category.title}>
              {category.items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    router.push(item.href);
                    onSelect?.();
                  }}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
      </CommandList>
    </Command>
  );
}
