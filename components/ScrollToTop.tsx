"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa"; // Phone icon

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 z-50 p-3 bg-black rounded-full cursor-pointer transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="h-6 w-6 text-white" />
      </div>
    </>
  );
};

export default ScrollToTop;
