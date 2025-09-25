"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageLayout title="Trigonometry Basics">
      {isMobile
        ? [<MobileBasics key="mobile-basics" />]
        : [<DesktopBasics key="desktop-basics" />]}
    </PageLayout>
  );
}
