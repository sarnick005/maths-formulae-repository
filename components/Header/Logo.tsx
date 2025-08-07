import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center ml-[-30px]">
      <Link href="/" className="text-xl font-bold text-black" aria-label="Home">
        <svg
          width="240"
          height="60"
          viewBox="0 0 240 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pi circle */}
          <circle
            cx="20"
            cy="30"
            r="8"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <text
            x="20"
            y="35"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fontWeight="bold"
            fill="#333"
          >
            π
          </text>

          {/* Repository icon */}
          <g transform="translate(200, 20)">
            <rect
              x="0"
              y="0"
              width="12"
              height="10"
              fill="none"
              stroke="#333"
              strokeWidth="1.5"
              rx="1"
            />
            <line x1="2" y1="3" x2="10" y2="3" stroke="#333" strokeWidth="1" />
            <line x1="2" y1="5" x2="8" y2="5" stroke="#333" strokeWidth="1" />
            <line x1="2" y1="7" x2="9" y2="7" stroke="#333" strokeWidth="1" />
          </g>

          {/* Text */}
          <text
            x="40"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
            fill="#000"
          >
            Maths
          </text>
          <text
            x="88"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
            fill="#000"
          >
            Formula
          </text>
          <text
            x="155"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
            fill="#000"
          >
            Repo
          </text>

          {/* Line */}
          <line
            x1="40"
            y1="30"
            x2="190"
            y2="30"
            stroke="#333"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Mathematical formulas */}
          <text
            x="40"
            y="42"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#666"
          >
            E = mc²
          </text>
          <text
            x="75"
            y="42"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#666"
          >
            a² + b² = c²
          </text>
          <text
            x="125"
            y="42"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#666"
          >
            ∫f(x)dx
          </text>

          {/* Mathematical symbols decoration */}
          <text
            x="170"
            y="45"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fill="#999"
          >
            ∑
          </text>
          <text
            x="180"
            y="42"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#999"
          >
            ∞
          </text>
        </svg>
      </Link>
    </div>
  );
}
