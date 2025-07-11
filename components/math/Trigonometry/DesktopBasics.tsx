"use client";

import BasicFunctions from "./BasicFunctions";
import RightAngledTriangle from "./RightAngledTriangle";

export default function DesktopBasics() {
  return (
    <div className="mx-4 hidden md:flex flex-row justify-between items-start text-xl gap-8">
      <BasicFunctions />
      <RightAngledTriangle />
    </div>
  );
}
