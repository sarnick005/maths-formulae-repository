"use client";
import dynamic from "next/dynamic";

const CompoundAngles = dynamic(
  () => import("@/components/math/Trigonometry/angles/CompoundAngles"),
  { ssr: false }
);
const SumAndProducts = dynamic(
  () => import("@/components/math/Trigonometry/angles/SumAndProducts"),
  { ssr: false }
);

export default function BasicsPage() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-6 md:py-10 text-gray-900 font-lora">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center underline decoration-black">
        Trigonometric Angles 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 h-fit">
          <CompoundAngles />
        </section>

        <section className="bg-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 h-fit">
          <SumAndProducts />
        </section>
      </div>
    </div>
  );
}
