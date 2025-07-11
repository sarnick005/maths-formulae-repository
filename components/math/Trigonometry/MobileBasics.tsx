"use client";

import RightAngledTriangle from "./RightAngledTriangle";
import BasicFunctions from "./BasicFunctions";

export default function MobileBasics() {
  return (
    <div className="mt-8 mx-4 md:hidden">
      <div className="flex flex-col gap-6 ml-4">
        <div className="flex justify-center">
          <RightAngledTriangle />
        </div>
        <BasicFunctions />
      </div>
    </div>
  );
}
