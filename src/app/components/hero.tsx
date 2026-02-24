"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Animamos el fondo y el badge superior
      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5, // Espera un poco a que el navbar esté presente
      })
        // 2. El título con un efecto de "revelación" hacia arriba
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.4",
        )
        // 3. El texto descriptivo
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        // 4. Los botones aparecen juntos
        .from(
          ".hero-btns",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        // 5. La imagen decorativa aparece con un zoom suave
        .from(
          ".hero-image",
          {
            x: 50,
            opacity: 0,
            scale: 1.1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.2",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="hero-content relative overflow-hidden pt-20 pb-32 lg:pt-16 lg:pb-24"
    >
      {/* Fondo radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(19,109,130,0.08)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Imagen decorativa derecha */}
      <div className="hero-image absolute top-0 right-0 -z-20 w-1/2 h-full opacity-50 hidden lg:block">
        <Image
          src="/agency-hero.png"
          alt="Abstract blue data visualization line chart"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Estrategia Basada en Evidencia
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.1] mb-8">
            Consultoría y análisis integral para decisiones{" "}
            <span className="text-primary">basadas en datos</span>
          </h1>

          <p className="hero-text text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl font-inter">
            Transformamos la complejidad de su información en ventajas
            competitivas. Aplicamos rigor científico y tecnología de vanguardia
            para potenciar su crecimiento.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 px-10 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
              Solicitar Consulta
              <span className="material-icons-outlined">
                <ArrowRight />
              </span>
            </button>

            <button className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              Ver Portafolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
