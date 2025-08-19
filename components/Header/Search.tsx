"use client";

import { MENU_ITEMS } from "@/utils/MenuItems";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  onSelect?: () => void;
};

export function Search({ onSelect }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flatten all menu items with their categories
  const allItems =
    MENU_ITEMS?.reduce(
      (acc, category) => {
        if (!category.items) return acc;
        const categoryItems = category.items.map((item) => ({
          ...item,
          category: category.title,
        }));
        return [...acc, ...categoryItems];
      },
      [] as Array<{
        title: string;
        href: string;
        description: string;
        category: string;
      }>
    ) || [];

  const filteredItems =
    searchValue && searchValue.length > 0
      ? allItems.filter(
          (item) =>
            item?.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
            item?.description
              ?.toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            item?.category?.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  const handleSelect = (href: string) => {
    try {
      router.push(href);
      setIsOpen(false);
      setSearchValue("");
      onSelect?.();
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchValue("");
    }

    if (e.key === "Enter" && filteredItems.length > 0) {
      handleSelect(filteredItems[0].href);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

return (
  <div className="relative w-full" ref={searchRef}>
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search for any topic..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-full md:w-[270px] lg:w-[370px] pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 outline-none"
      />
    </div>

    {/* Dropdown */}
    {isOpen && (
      <div className="absolute top-full left-0 right-0 mt-2 z-[9999] max-h-[70vh] md:max-h-96 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
        {!searchValue && (
          <div className="p-4 text-center text-gray-500 text-sm">
            Start typing to search topics...
          </div>
        )}

        {searchValue && filteredItems.length === 0 && (
          <div className="p-6 text-center text-gray-500 text-sm">
            No results found for "{searchValue}"
          </div>
        )}

        {searchValue && filteredItems.length > 0 && (
          <div className="overflow-y-auto max-h-[inherit]">
            <div className="px-4 py-2 text-xs text-gray-500 border-b bg-gray-50 sticky top-0">
              {filteredItems.length} result
              {filteredItems.length !== 1 ? "s" : ""} found
            </div>
            <div className="py-2">
              {filteredItems.map((item, index) => (
                <button
                  key={`${item.href}-${index}`}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-100 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

}