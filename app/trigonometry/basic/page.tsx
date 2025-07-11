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
    <div className="min-h-screen bg-white px-4 md:px-12 py-6 md:py-10 text-gray-900 font-lora">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center underline decoration-black">
        Trigonometry Basics
      </h1>

      {/* Mobile View */}
      <div className="block md:hidden bg-slate-50 p-4 rounded-2xl shadow-sm border border-gray-200">
        <MobileBasics />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-slate-50 p-6 rounded-2xl shadow-sm border border-gray-200">
        <DesktopBasics />
      </div>
    </div>
  );
}
