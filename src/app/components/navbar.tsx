"use client";

import { useRef, useState } from "react";
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
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );
      gsap.from(".mobile-nav-link", {
        x: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.2,
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Sectores", href: "/sectores" },
    { name: "Metodología", href: "/metodologia" },
    { name: "Contacto", href: "/contacto" },
  ];

  const services = [
    {
      name: "Tecnología y Sistemas de Información",
      href: "/servicios/tecnologia-sistemas",
      icon: <Database size={20} />,
    },
    {
      name: "Inteligencia y Análisis de Datos",
      href: "/servicios/inteligencia-analisis",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Evaluación Económica y Financiera",
      href: "/servicios/evaluacion-economica-financiera",
      icon: <DollarSign size={20} />,
    },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur py-3 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src="/logostatcont.png"
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12"
              width={100}
              height={100}
            />
            <Link href="/">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-black uppercase cursor-pointer">
                STATCONT
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center text-black">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-[17px] font-semibold hover:text-primary transition-colors duration-300 py-2.5 px-4"
              >
                {item.name}
              </Link>
            ))}

            {/* Servicios Dropdown Desktop */}
            <div className="relative group">
              <Link
                href="/servicios"
                className="nav-link text-[17px] font-semibold hover:text-primary transition-colors duration-300 py-2.5 px-4 cursor-pointer flex items-center gap-1"
              >
                Servicios{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </Link>

              <div className="absolute left-0 mt-0 w-80 bg-white border border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 rounded-xl overflow-hidden">
                <div className="p-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors rounded-lg text-sm font-medium border-b border-slate-50 last:border-0"
                    >
                      <div className="text-primary">{service.icon}</div>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botón & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="nav-button hidden sm:block">
              <Link
                href="/contacto"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-3 font-bold text-sm transition-all shadow-md flex items-center gap-2 rounded-xl"
              >
                <Send size={16} />
                Agendar Consultoría
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-[60] bg-white lg:hidden h-screen w-screen overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <Image
                  src="/logostatcont.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-black text-black">STATCONT</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 border border-slate-200 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link text-3xl font-bold text-slate-900 hover:text-primary transition-colors py-4 border-b border-slate-50"
                >
                  {item.name}
                </Link>
              ))}

              <div className="py-4 border-b border-slate-50">
                <div className="flex items-center justify-between">
                  <Link
                    href="/servicios"
                    onClick={() => setIsMenuOpen(false)}
                    className="mobile-nav-link text-3xl font-bold text-slate-900"
                  >
                    Servicios
                  </Link>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="p-2 -mr-2"
                  >
                    <ChevronDown
                      className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                      size={28}
                    />
                  </button>
                </div>

                {isServicesOpen && (
                  <div className="mt-6 flex flex-col gap-4 pl-4">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 text-lg font-semibold text-slate-600 hover:text-primary"
                      >
                        <div className="text-primary">{service.icon}</div>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-white p-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 shadow-xl shadow-primary/20"
              >
                <Send size={24} />
                Agendar Consultoría
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
