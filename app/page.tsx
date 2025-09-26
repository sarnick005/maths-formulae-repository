"use client"
import SplitText from "@/components/ui/reactbits/SplitText";
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
                className="text-gray-800 text-lg sm:text-xl mb-2 font-robotoMono"
                
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 text-sm opacity-85 font-lora"
                
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
      <div className="text-center mb-16 font-lora">
        <SplitText
          text="Maths Formulae Repository"
          className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif mt-12"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
        />
        <p
          className="text-md sm:text-xl text-gray-700 opacity-90 font-mono"
          style={{
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          Mathematics formulae I&apos;ve encountered in my life so far
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
