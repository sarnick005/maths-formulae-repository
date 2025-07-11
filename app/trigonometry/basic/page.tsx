"use client"
import dynamic from "next/dynamic";

const MobileBasics = dynamic(
  () => import("@/components/math/Trigonometry/MobileBasics"),
  {
    ssr: false,
  }
);
const DesktopBasics = dynamic(
  () => import("@/components/math/Trigonometry/DesktopBasics"),
  {
    ssr: false,
  }
);



export default function BasicsPage() {
  return (
    <>
      <MobileBasics />
      <DesktopBasics />
    </>
  );
}
