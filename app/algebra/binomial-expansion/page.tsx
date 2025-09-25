"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const BinomialExpansion = dynamic(
  () => import("@/components/math/algebra/BinomialExpansion"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);

export default function Page() {
  return (
    <PageLayout title="Binomial Expansion">
      {[<BinomialExpansion key="binomial-expansion" />]}
    </PageLayout>
  );
}
