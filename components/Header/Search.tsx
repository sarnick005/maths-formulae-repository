"use client";

import { MENU_ITEMS } from "@/utils/MenuItems";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type SearchProps = {
  onSelect?: () => void;
};

export function Search({ onSelect }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    try {
      router.push(href);
      setIsOpen(false);
      setSearchValue("");
      document.body.style.overflow = "unset"; // Reset body scroll
      onSelect?.();
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchValue("");
      document.body.style.overflow = "unset"; // Reset body scroll
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

    // Prevent body scroll when dropdown is open on mobile
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={searchRef}>
      <div
        className="relative"
        style={{
          transform: "rotate(-0.3deg)",
        }}
      >
        {/* Hand-drawn search icon */}
        <div
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-black rounded-full"
          style={{
            transform: "rotate(15deg)",
          }}
        >
          <div
            className="absolute -bottom-2 -right-2 w-3 h-0 border-b-2 border-black"
            style={{
              transform: "rotate(45deg)",
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Search for any topic..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full md:w-[270px] lg:w-[370px] pl-12 pr-4 py-3 text-black placeholder-gray-600"
          style={{
            background: "#fefefe",
            border: "3px solid #1a1a1a",
            borderRadius: "12px",
            boxShadow: "3px 3px 0px rgba(0,0,0,0.2)",
            fontFamily: '"Kalam", cursive',
            fontSize: "14px",
          }}
        />
      </div>

      {/* Dropdown with whiteboard styling */}
      {isOpen && (searchValue || filteredItems.length > 0) && (
        <div
          className="fixed inset-x-4 top-20 z-[9999] max-h-[70vh] overflow-y-auto md:absolute md:top-full md:left-0 md:right-0 md:mt-2 md:inset-x-auto md:max-h-96"
          style={{
            background: "#fefefe",
            border: "3px solid #1a1a1a",
            borderRadius: "12px",
            boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
            transform: "rotate(0.2deg)",
          }}
        >
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-black" />
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-black" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-black" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-black" />

          {searchValue && filteredItems.length === 0 && (
            <div
              className="p-6 text-center text-gray-600"
              style={{
                fontFamily: '"Kalam", cursive',
              }}
            >
              <div className="text-2xl mb-2">🤔</div>
              No results found for "{searchValue}"
            </div>
          )}

          {searchValue && filteredItems.length > 0 && (
            <div className="py-3">
              <div
                className="px-6 py-2 text-xs text-gray-600 border-b border-dashed border-gray-300"
                style={{
                  fontFamily: '"Kalam", cursive',
                }}
              >
                {filteredItems.length} result
                {filteredItems.length !== 1 ? "s" : ""} found
              </div>
              {filteredItems.map((item, index) => (
                <button
                  key={`${item.href}-${index}`}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-100"
                  style={{
                    borderBottom:
                      index < filteredItems.length - 1
                        ? "1px dashed #ccc"
                        : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    {/* Hand-drawn bullet */}
                    <div className="flex items-center">
                      <div
                        className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"
                        style={{
                          transform: `rotate(${index * 25}deg)`,
                        }}
                      />
                      <span
                        className="font-bold text-black group-hover:text-blue-800"
                        style={{
                          fontFamily: '"Kalam", cursive',
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <span
                      className="text-xs text-black px-3 py-1 border-2 border-black rounded-full"
                      style={{
                        background: "#f0f0f0",
                        fontFamily: '"Kalam", cursive',
                        transform: "rotate(-2deg)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p
                    className="text-sm text-gray-700 pl-5"
                    style={{
                      fontFamily: '"Kalam", cursive',
                    }}
                  >
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
