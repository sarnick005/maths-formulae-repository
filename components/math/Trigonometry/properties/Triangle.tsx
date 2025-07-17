import Image from "next/image";
import CircumTriangle from "@/assets/circum-triangle.png";

export default function CircumCircleTriangle() {
  return (
    <Image
      src={CircumTriangle}
      width={300}
      height={300}
      alt="Right angled triangle"
      className="object-contain mx-auto"
    />
  );
}
