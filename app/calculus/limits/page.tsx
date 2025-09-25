"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const Limits = dynamic(() => import("@/components/math/calculus/Limits"), {
  ssr: false,
  loading: () => <SkeletonCard />,
});

export default function Page() {
  return <PageLayout title="Limits">{[<Limits key="limits" />]}</PageLayout>;
}
