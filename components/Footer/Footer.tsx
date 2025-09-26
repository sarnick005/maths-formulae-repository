"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  // Array of social links and icons
  const socialLinks = [
    {
      href: "https://github.com/sarnick005",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://x.com/Sarnick_Ch",
      label: "Twitter",
      icon: BsTwitterX,
    },
    {
      href: "https://sarnick.vercel.app",
      label: "Website",
      icon: FaGlobe,
    },
    {
      href: "https://www.linkedin.com/in/sarnick-chakraborty-16828423a/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "mailto:sarnick.chakraborty@gmail.com",
      label: "Email",
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-muted-foreground mb-4">
          © 2025 Maths Formulae Repository by Sarnick Chakraborty.
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 transition-transform transform hover:scale-110 hover:text-gray-800"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
