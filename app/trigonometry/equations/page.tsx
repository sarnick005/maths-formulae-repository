"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const GeneralSolutions = dynamic(
  () => import("@/components/math/Trigonometry/equations/GeneralSolution"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

export default function Page() {
  return (
    <PageLayout title="General Solution for Trigonometric Equations">
      {[<GeneralSolutions key="general-solutions" />]}
    </PageLayout>
  );
}
