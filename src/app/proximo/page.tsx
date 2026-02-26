"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Hammer, ArrowLeft, Construction } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Proximo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".proximo-icon", {
        scale: 0,
        rotation: -45,
        autoAlpha: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.7)",
      })
        .from(
          ".proximo-title",
          {
            y: 40,
            autoAlpha: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".proximo-text",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".proximo-btn",
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 p-6 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(4,71,131,0.05)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="proximo-icon mb-8 p-6 bg-primary/10 rounded-full">
        <Construction size={64} className="text-primary" />
      </div>

      <h1 className="proximo-title text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
        Estamos Trabajando <br />
        <span className="text-primary text-3xl md:text-5xl">
          en este Proyecto
        </span>
      </h1>

      <p className="proximo-text text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-12 font-medium">
        Estamos puliendo los últimos detalles para brindarle la mejor
        experiencia y mostrarle el valor que podemos generar. ¡Vuelva pronto!
      </p>

      <Link
        href="/"
        className="proximo-btn group flex items-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl"
      >
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Volver al Inicio
      </Link>
    </div>
  );
}
