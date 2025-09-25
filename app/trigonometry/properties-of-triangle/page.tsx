"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const PropertiesOFTriangle = dynamic(
  () =>
    import("@/components/math/Trigonometry/properties/PropertiesOfTriangle"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

export default function Page() {
  return (
    <PageLayout title="Properties of Triangle">
      {[<PropertiesOFTriangle key="properties-of-triangle" />]}
    </PageLayout>
  );
}
