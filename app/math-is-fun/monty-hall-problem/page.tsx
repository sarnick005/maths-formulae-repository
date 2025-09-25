"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const MontyHallProblem = dynamic(
  () => import("@/components/math/math-is-fun/MontyHallProblem"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);
export default function Page() {
  return (
    <PageLayout title="Monty Hall Problem">
      {[<MontyHallProblem key="monty" />]}
    </PageLayout>
  );
}
