"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const GCD = dynamic(() => import("@/components/math/number-theory/GCD"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});
const LCM = dynamic(() => import("@/components/math/number-theory/LCM"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});

export default function Page() {
  return (
    <PageLayout title="GCD & LCM">
      {[<GCD key="gcd" />, <LCM key="lcm" />]}
    </PageLayout>
  );
}
