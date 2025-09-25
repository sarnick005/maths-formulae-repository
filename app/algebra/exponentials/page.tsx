"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const Indices = dynamic(() => import("@/components/math/algebra/Indices"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});
const Logarithm = dynamic(() => import("@/components/math/algebra/Logarithm"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});

export default function Page() {
  return (
    <PageLayout title="Exponential">
      {[<Indices key="indices" />, <Logarithm key="logarithm" />]}
    </PageLayout>
  );
}
