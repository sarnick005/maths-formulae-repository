"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const Quadratic = dynamic(() => import("@/components/math/algebra/Quadratic"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});

export default function Page() {
  return (
    <PageLayout title="Quadratic Equations">
      {[<Quadratic key="quadratic-equations" />]}
    </PageLayout>
  );
}
