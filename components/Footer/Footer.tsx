"use client"
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 relative">
      {/* Hand-drawn border line */}
      <div
        className="w-full h-1 bg-black mb-8 relative"
        style={{
          background:
            "repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 12px)",
          transform: "rotate(-0.2deg)",
        }}
      >
        {/* Decorative dots along the line */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-black rounded-full transform -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-y-1/2 rotate-12"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-black rounded-full transform -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center relative">
        {/* Background paper texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "#fefefe",
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(45deg, rgba(0,0,0,0.01) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px, 20px 20px",
            borderRadius: "8px",
          }}
        />

        {/* Copyright text with hand-drawn styling */}
        <div
          className="relative mb-6 p-4 border-2 border-black rounded-lg inline-block"
          style={{
            background: "rgba(255,255,255,0.9)",
            boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
            transform: "rotate(-0.5deg)",
          }}
        >
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-black"></div>
          <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-black"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-black"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-black"></div>

          <div
            className="text-gray-700 font-medium"
            style={{
              fontFamily: '"Kalam", cursive',
              fontSize: "14px",
            }}
          >
            © 2025 Maths Formulae Repository by{" "}
            <span
              className="font-bold relative inline-block"
              style={{ transform: "rotate(1deg)" }}
            >
              Sarnick Chakraborty
              {/* Underline decoration */}
              <span
                className="absolute -bottom-1 left-0 h-0.5 bg-black w-full block"
                style={{
                  transform: "rotate(-1deg)",
                  borderRadius: "50%",
                }}
              />
            </span>
          </div>
        </div>

        {/* Social links with whiteboard styling */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/sarnick005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative p-3 border-2 border-black rounded-lg hover:bg-gray-50 transition-all duration-200"
            style={{
              background: "#fefefe",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
              transform: "rotate(-2deg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(-2deg) scale(1.05)";
              e.currentTarget.style.boxShadow = "3px 3px 0px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(-2deg) scale(1)";
              e.currentTarget.style.boxShadow = "2px 2px 0px rgba(0,0,0,0.2)";
            }}
          >
            <Github className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
            {/* Decorative dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></div>
          </a>

          <a
            href="mailto:sarnick.chakraborty@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="group relative p-3 border-2 border-black rounded-lg hover:bg-gray-50 transition-all duration-200"
            style={{
              background: "#fefefe",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
              transform: "rotate(1deg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(1deg) scale(1.05)";
              e.currentTarget.style.boxShadow = "3px 3px 0px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(1deg) scale(1)";
              e.currentTarget.style.boxShadow = "2px 2px 0px rgba(0,0,0,0.2)";
            }}
          >
            <Mail className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
            {/* Decorative dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/sarnick-chakraborty-16828423a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative p-3 border-2 border-black rounded-lg hover:bg-gray-50 transition-all duration-200"
            style={{
              background: "#fefefe",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
              transform: "rotate(-1deg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(-1deg) scale(1.05)";
              e.currentTarget.style.boxShadow = "3px 3px 0px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(-1deg) scale(1)";
              e.currentTarget.style.boxShadow = "2px 2px 0px rgba(0,0,0,0.2)";
            }}
          >
            <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
            {/* Decorative dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></div>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center items-center space-x-4 opacity-60">
          <div
            className="text-2xl"
            style={{
              fontFamily: '"Kalam", cursive',
              transform: "rotate(-5deg)",
            }}
          >
            📐
          </div>
          <div
            className="w-12 h-0 border-b-2 border-dashed border-black"
            style={{ transform: "rotate(3deg)" }}
          />
          <div
            className="text-2xl"
            style={{
              fontFamily: '"Kalam", cursive',
              transform: "rotate(8deg)",
            }}
          >
            ∞
          </div>
          <div
            className="w-12 h-0 border-b-2 border-dashed border-black"
            style={{ transform: "rotate(-2deg)" }}
          />
          <div
            className="text-2xl"
            style={{
              fontFamily: '"Kalam", cursive',
              transform: "rotate(-3deg)",
            }}
          >
            📊
          </div>
        </div>
      </div>
    </footer>
  );
}
