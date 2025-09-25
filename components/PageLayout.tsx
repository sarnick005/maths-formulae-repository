"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode[];
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background px-4 md:px-12 py-6 md:py-10 text-foreground font-lora">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center border-b-2 border-foreground pb-2 inline-block w-full">
          {title}
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {children.map((child, idx) => (
            <section
              key={idx}
              className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm h-fit"
            >
              {child}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
