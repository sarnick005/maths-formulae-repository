"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const CompoundAngles = dynamic(
  () => import("@/components/math/Trigonometry/angles/CompoundAngles"),
  { ssr: false, loading: () => <SkeletonCard /> }
);
const SumAndProducts = dynamic(
  () => import("@/components/math/Trigonometry/angles/SumAndProducts"),
  { ssr: false, loading: () => <SkeletonCard /> }
);
const MultipleAngle = dynamic(
  () => import("@/components/math/Trigonometry/angles/MultipleAngle"),
  { ssr: false, loading: () => <SkeletonCard /> }
);
const SubMultipleAngle = dynamic(
  () => import("@/components/math/Trigonometry/angles/SubmultipleAngles"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

export default function Page() {
  return (
    <PageLayout title="Trigonometric Angles">
      {[
        <CompoundAngles key="compound" />,
        <SumAndProducts key="sumproduct" />,
        <MultipleAngle key="multiple" />,
        <SubMultipleAngle key="submultiple" />,
      ]}
    </PageLayout>
  );
}
