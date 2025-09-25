"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout"; 

const MathematicalInduction = dynamic(
  () => import("@/components/math/algebra/MathematicalInduction"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);

export default function Page() {
  return (
    <PageLayout title="Mathematical Induction">
      {[<MathematicalInduction key="mathematical-induction" />]}
    </PageLayout>
  );
}
