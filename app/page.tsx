"use client";

import { MENU_ITEMS } from "@/utils/MenuItems";
import { useRouter } from "next/navigation";
import React from "react";


interface ITopicCard {
  title: string;
  items: Array<{ title: string; href: string; description: string }>;
  path: string;
}

function TopicSection({ title, items }: ITopicCard) {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="mb-20 px-4 sm:px-0">
      {/* Section Title with underline */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl text-black mb-2 inline-block relative"
          style={{
            fontFamily: '"Kalam", cursive',
            fontWeight: "bold",
            transform: "rotate(-0.5deg)",
          }}
        >
          {title}
        </h2>
        {/* Hand-drawn underline */}
        <div
          className="h-1 bg-black mx-auto mt-2 relative"
          style={{
            width: `${title.length * 25}px`,
            borderRadius: "50%",
            transform: "rotate(0.3deg)",
            background:
              "repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 12px)",
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => handleClick(item.href)}
          >
            {/* Whiteboard card with marker-style border */}
            <div
              className="relative p-8 min-h-36 flex flex-col justify-center items-center text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl"
              style={{
                background: "#fefefe",
                border: "3px solid #1a1a1a",
                borderRadius: "8px",
                boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`,
              }}
            >
              {/* Decorative corner brackets */}
              <div
                className="absolute top-2 left-2 w-4 h-4 border-l-3 border-t-3 border-black"
                style={{ borderWidth: "2px" }}
              />
              <div
                className="absolute top-2 right-2 w-4 h-4 border-r-3 border-t-3 border-black"
                style={{ borderWidth: "2px" }}
              />
              <div
                className="absolute bottom-2 left-2 w-4 h-4 border-l-3 border-b-3 border-black"
                style={{ borderWidth: "2px" }}
              />
              <div
                className="absolute bottom-2 right-2 w-4 h-4 border-r-3 border-b-3 border-black"
                style={{ borderWidth: "2px" }}
              />

              <h3
                className="text-black text-xl mb-3 relative"
                style={{
                  fontFamily: '"Kalam", cursive',
                  fontWeight: "bold",
                  textShadow: "1px 1px 0px rgba(0,0,0,0.1)",
                }}
              >
                {item.title}
              </h3>

              {/* Hand-drawn arrow pointing to description */}
              <div
                className="w-8 h-0 border-b-2 border-black mb-2 relative mx-auto"
                style={{
                  transform: "rotate(2deg)",
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

              <p
                className="text-gray-800 text-sm leading-relaxed"
                style={{
                  fontFamily: '"Kalam", cursive',
                  fontWeight: "400",
                }}
              >
                {item.description}
              </p>

              {/* Marker dots for emphasis */}
              <div className="absolute top-4 right-6 flex space-x-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-x-hidden px-4 sm:px-0 relative"
      style={{
        background: "#f8f8f8",
        backgroundImage: `
          radial-gradient(circle at 20px 20px, rgba(0,0,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px, 40px 40px, 40px 40px",
      }}
    >
      {/* Whiteboard grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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

      {/* Header */}
      <div className="text-center mb-20 relative">
        {/* Title with hand-drawn style */}
        <h1
          className="text-3xl sm:text-6xl font-bold text-black mb-6 relative inline-block"
          style={{
            fontFamily: '"Kalam", cursive',
            transform: "rotate(-1deg)",
            textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            marginTop: "60px",
          }}
        >
          Maths Formulae Repository
        </h1>

        {/* Hand-drawn box around title */}
        <div
          className="absolute inset-0 border-4 border-black"
          style={{
            borderRadius: "15px",
            transform: "rotate(0.5deg) scale(1.1)",
            top: "20px",
            zIndex: -1,
            background: "rgba(255,255,255,0.8)",
          }}
        />

        {/* Subtitle with arrow */}
        <div className="flex items-center justify-center mt-8">
          <div
            className="w-12 h-0 border-b-3 border-black mr-4"
            style={{
              transform: "rotate(-5deg)",
              borderWidth: "2px",
            }}
          >
            <div
              className="absolute right-0 top-0 w-0 h-0"
              style={{
                borderLeft: "8px solid black",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <p
            className="text-lg sm:text-2xl text-black"
            style={{
              fontFamily: '"Kalam", cursive',
              fontWeight: "400",
              transform: "rotate(0.5deg)",
            }}
          >
            Mathematics I&apos;ve encountered so far
          </p>
          <div
            className="w-12 h-0 border-b-3 border-black ml-4"
            style={{
              transform: "rotate(5deg)",
              borderWidth: "2px",
            }}
          >
            <div
              className="absolute left-0 top-0 w-0 h-0"
              style={{
                borderRight: "8px solid black",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Topic Sections */}
      <div className="max-w-6xl mx-auto relative">
        {MENU_ITEMS.map((section, index) => (
          <TopicSection
            key={index}
            title={section.title}
            items={section.items}
            path={section.href}
          />
        ))}
      </div>

      {/* Add Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
