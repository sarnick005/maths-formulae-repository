import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center ml-[-30px]">
      <Link
        href="/"
        className="text-xl font-bold text-black"
        aria-label="Home"
      >
        <svg
          width="200"
          height="60"
          viewBox="0 0 200 60"
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

          {/* Plus sign */}
          <g transform="translate(170, 20)">
            <rect x="5" y="2" width="2" height="8" fill="#333" />
            <rect x="2" y="5" width="8" height="2" fill="#333" />
          </g>

          {/* Text */}
          <text
            x="50"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fontWeight="bold"
            fill="#000"
          >
            Math
          </text>
          <text
            x="95"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="normal"
            fill="#666"
          >
            is
          </text>
          <text
            x="110"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fontWeight="bold"
            fill="#000"
          >
            fun
          </text>

          {/* Line */}
          <line
            x1="50"
            y1="30"
            x2="140"
            y2="30"
            stroke="#333"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Equation */}
          <text
            x="50"
            y="45"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#666"
          >
            2 + 2 = 4
          </text>

          {/* Smile face */}
          <circle
            cx="130"
            cy="40"
            r="6"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          />
          <circle cx="127" cy="38" r="0.5" fill="#333" />
          <circle cx="133" cy="38" r="0.5" fill="#333" />
          <path
            d="M 127 42 Q 130 44 133 42"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          />
        </svg>
      </Link>
    </div>
  );
}
