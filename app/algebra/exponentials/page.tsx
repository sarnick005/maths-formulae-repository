"use client";
import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";

const Logarithm = dynamic(
  () => import("@/components/math/algebra/Logarithm"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);
const Indices = dynamic(
  () => import("@/components/math/algebra/Indices"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);

export default function Page() {
  return (
    <div className="min-h-screen bg-background px-4 md:px-12 py-6 md:py-10 text-foreground font-lora">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center border-b-2 border-foreground pb-2 inline-block w-full">
          Exponentials
        </h1>

        <div className="grid grid-cols-1 gap-6">
          <section className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm w-full">
            <Indices />
          </section>
          <section className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm w-full">
            <Logarithm />
          </section>
        </div>
      </div>
    </div>
  );
}
