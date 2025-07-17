"use client";
import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";

const PropertiesOFTriangle = dynamic(
  () =>
    import("@/components/math/Trigonometry/properties/PropertiesOfTriangle"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

export default function Page() {
  return (
    <div className="min-h-screen bg-background px-4 md:px-12 py-6 md:py-10 text-foreground font-lora">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center border-b-2 border-foreground pb-2 inline-block w-full">
          Properties of Triangle
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm h-fit">
            <PropertiesOFTriangle />
          </section>
        </div>
      </div>
    </div>
  );
}
