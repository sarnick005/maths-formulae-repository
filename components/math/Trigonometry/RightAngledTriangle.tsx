import Image from "next/image";
import rightAngledTriangle from "@/assets/right-angle-triangle.png";

export default function RightAngledTriangle() {
  return (
    <Image
      src={rightAngledTriangle}
      width={300}
      height={300}
      alt="Right angled triangle"
      className="object-contain"
    />
  );
}
