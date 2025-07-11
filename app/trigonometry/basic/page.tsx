"use client";
import dynamic from "next/dynamic";

const MobileBasics = dynamic(
  () => import("@/components/math/Trigonometry/MobileBasics"),
  { ssr: false }
);

const DesktopBasics = dynamic(
  () => import("@/components/math/Trigonometry/DesktopBasics"),
  { ssr: false }
);

export default function BasicsPage() {
  return (
    <div className="min-h-screen bg-background px-4 md:px-12 py-6 md:py-10 text-foreground font-lora">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center border-b-2 border-foreground pb-2 inline-block w-full">
          Trigonometry Basics
        </h1>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <MobileBasics />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <DesktopBasics />
          </div>
        </div>
      </div>
    </div>
  );
}
