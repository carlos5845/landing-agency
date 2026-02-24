"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Send,
  BarChart3,
  LineChart,
  DollarSign,
  Database,
  Search,
  ClipboardCheck,
} from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      tl.from(
        ".nav-link",
        {
          opacity: 0,
          y: 10,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      );

      tl.from(
        ".nav-button",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      );
    },
    { scope: navRef },
  );

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Sectores", href: "/sectores" },
    { name: "Metodología", href: "/metodologia" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur  py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logostatcont.png"
              alt="Logo"
              className="w-12 h-12"
              width={100}
              height={100}
            />
            <Link href="/">
              <span className="text-3xl font-bold tracking-tight text-black uppercase cursor-pointer">
                STATCONT
              </span>
            </Link>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center text-black relative">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-[18px] font-semibold hover:text-primary transition-colors duration-300 py-2.5 px-5"
              >
                {item.name}
              </Link>
            ))}

            {/* Servicios Dropdown */}
            <div className="relative group">
              <span className="nav-link text-[18px] font-semibold hover:text-primary transition-colors duration-300 py-2.5 px-5 cursor-pointer">
                Servicios
              </span>

              <div className="absolute left-0 mt-0 w-96 bg-white border border-slate-300 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-30">
                <div className="absolute left-0 mt-0 w-105 bg-white border border-slate-300 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {/* ITEM */}
                  <Link
                    href="/servicios/consultoria-datos"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors border-b border-slate-200"
                  >
                    <BarChart3 size={20} />
                    Consultoría basada en datos
                  </Link>

                  <Link
                    href="/servicios/analisis-estadistico"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors border-b border-slate-200"
                  >
                    <LineChart size={20} />
                    Análisis estadístico avanzado
                  </Link>

                  <Link
                    href="/servicios/evaluacion-economica"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors border-b border-slate-200"
                  >
                    <DollarSign size={20} />
                    Evaluación económica y financiera
                  </Link>

                  <Link
                    href="/servicios/sistemas-informacion"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors border-b border-slate-200"
                  >
                    <Database size={20} />
                    Desarrollo de sistemas de información
                  </Link>

                  <Link
                    href="/servicios/estudios-mercado"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors border-b border-slate-200"
                  >
                    <Search size={20} />
                    Estudios de mercado
                  </Link>

                  <Link
                    href="/servicios/evaluacion-proyectos"
                    className="flex items-center gap-4 px-[20px] py-[30px] hover:bg-slate-100 transition-colors"
                  >
                    <ClipboardCheck size={20} />
                    Evaluación de proyectos y políticas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="nav-button">
            <Link
              href="/contacto"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 font-semibold text-sm transition-all shadow-md flex gap-2"
            >
              <Send size={18} />
              Agendar Consultoría
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
