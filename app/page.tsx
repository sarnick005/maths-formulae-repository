"use client"
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

  return (
    <div className="mb-16 px-4 sm:px-0">
      <h2
        className="text-3xl text-gray-900 mb-8 font-serif text-center"
        style={{
          fontFamily: '"Lora", serif',
        }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => router.push(item.href)}
          >
            <div className="border-2 border-gray-700 rounded-2xl p-6 h-32 flex flex-col justify-center items-center text-center hover:bg-opacity-50 transition-all duration-300 transform group-hover:scale-105">
              <h3
                className="text-gray-800 text-lg mb-2 font-mono"
                style={{
                  fontFamily: '"Roboto Mono", monospace',
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 text-xs opacity-80 font-serif"
                style={{
                  fontFamily: '"Lora", serif',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden px-4 sm:px-0">
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif mt-12"
          style={{
            fontFamily: '"Lora", serif',
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Maths Formulae Repository
        </h1>
        <p
          className="text-md sm:text-xl text-gray-700 opacity-90 font-mono"
          style={{
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          Mathematics Formulae I&apos;ve encountered in my life so far
        </p>
      </div>

      {/* Topic Sections */}
      <div className="max-w-5xl mx-auto">
        {MENU_ITEMS.map((section, index) => (
          <TopicSection
            key={index}
            title={section.title}
            items={section.items}
            path={section.href}
          />
        ))}
      </div>
      
    </div>
  );
}
