import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-2xl font-bold text-black">
        <Link href="/"> Math-is-fun</Link>
      </div>
    </div>
  );
}
