"use client";

import dynamic from "next/dynamic";
import { SkeletonCard } from "@/components/SkeletonCard";
import PageLayout from "@/components/PageLayout";

const MobileBasics = dynamic(
  () => import("@/components/math/Trigonometry/MobileBasics"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

const DesktopBasics = dynamic(
  () => import("@/components/math/Trigonometry/DesktopBasics"),
  { ssr: false, loading: () => <SkeletonCard /> }
);

export default function BasicsPage() {
  return (
    <PageLayout title="Trigonometry Basics">
      {[
        <div key="mobile-basics" className="block md:hidden">
          <MobileBasics />
        </div>,
        <div key="desktop-basics" className="hidden md:block">
          <DesktopBasics />
        </div>,
      ]}
    </PageLayout>
  );
}
