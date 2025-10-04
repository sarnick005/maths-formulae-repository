"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const MontyCarloCoinFlip = dynamic(
  () => import("@/components/math/math-is-fun/MonteCarloCoinFlip"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);
const DiceRollerSimulator = dynamic(
  () => import("@/components/math/math-is-fun/MonteCarloDiceRoll"),
  {
    ssr: false,
    loading: () => <SkeletonCard />,
  }
);
export default function Page() {
  return (
    <PageLayout title="Monte Carlo Simulation">
      {[
        <MontyCarloCoinFlip key="coin-flip" />,
        <DiceRollerSimulator key="dice-roll" />,
      ]}
    </PageLayout>
  );
}
