"use client";

import { MENU_ITEMS } from "@/utils/MenuItems";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";


type SearchProps = {
  onSelect?: () => void;
};

export function Search({ onSelect }: SearchProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const allItems = MENU_ITEMS.reduce(
    (acc, category) => {
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
  );

  const filteredItems = searchValue
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.category.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setSearchValue("");
    onSelect?.();
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for any topic..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full md:w-[270px] lg:w-[370px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {searchValue && filteredItems.length === 0 && (
            <div className="p-4 text-sm text-gray-500 text-center">
              No results found for `{searchValue}`
            </div>
          )}

          {searchValue && filteredItems.length > 0 && (
            <div className="py-2">
              {filteredItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2 ml-2">
                    <span className="font-medium text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-xs text-black bg-blue-50 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
