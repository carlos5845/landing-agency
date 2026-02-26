"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-12 w-12
        border border-slate-300
        bg-white/90 backdrop-blur
        text-slate-700
        shadow-lg
        hover:bg-primary hover:text-white
        transition
        rounded-xl
      "
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
