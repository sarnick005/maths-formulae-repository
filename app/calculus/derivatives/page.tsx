"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const Derivatives = dynamic(
  () => import("@/components/math/calculus/Derivatives"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);

export default function Page() {
  return (
    <PageLayout title="Derivatives">
      {[<Derivatives key="derivatives" />]}
    </PageLayout>
  );
}
