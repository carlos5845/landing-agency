"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Animación del contenedor principal (baja desde arriba)
      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // 2. Animación de los links en cascada (aparecen suavemente)
      tl.from(
        ".nav-link",
        {
          opacity: 0,
          y: 10,
          stagger: 0.1, // Retraso entre cada link
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      ); // Comienza un poco antes de que termine la anterior

      // 3. Animación del botón de acción
      tl.from(
        ".nav-button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      );
    },
    { scope: navRef },
  );

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sectores", href: "/sectores" },
    { name: "Metodología", href: "/metodologia" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      ref={navRef}
      className="navbar sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase cursor-pointer">
                <span className="text-black italic">STATCONT</span>
              </span>
            </Link>
          </div>

          {/* Links de Navegación */}
          <div className="hidden md:flex items-center space-x-8 text-black">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-semibold hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón de Consultoría */}
          <div className="nav-button">
            <Link
              href="/contacto"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-primary/20 inline-block"
            >
              Agendar Consultoría
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
