"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {
  Rocket,
  Eye,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Entry Header Animation
      tl.from(".nosotros-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".nosotros-title",
          {
            y: 40,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.5",
        )
        .from(
          ".nosotros-text",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        );

      // Section: Mission/Vision/Values
      gsap.from(".mission-card", {
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Section: Commitment
      gsap.from(".commitment-content", {
        scrollTrigger: {
          trigger: ".commitment-section",
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Section: Policies
      gsap.from(".policy-card", {
        scrollTrigger: {
          trigger: ".policy-section",
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Section: Growth
      gsap.from(".growth-content", {
        scrollTrigger: {
          trigger: ".growth-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".growth-stat", {
        scrollTrigger: {
          trigger: ".growth-section",
          start: "top 70%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {/* Header */}
      <header className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="nosotros-badge inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 tracking-wide uppercase">
              Identidad del Grupo
            </span>

            <h1 className="nosotros-title text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">
              Pioneros del Futuro de la{" "}
              <span className="text-primary">Estrategia Basada en Datos</span>.
            </h1>

            <p className="nosotros-text text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-inter">
              STATCONT es una agencia consultora multidisciplinaria dedicada a
              transformar datos complejos en inteligencia accionable. Combinamos
              experiencia humana con analítica de vanguardia para navegar el
              cambiante panorama global.
            </p>
          </div>
        </div>
      </header>

      {/* Mission, Vision, Values */}
      <section className="mission-section py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="mission-card group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <Rocket className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-800 mb-4 tracking-tight">Misión</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Empoderar a organizaciones globales mediante la entrega de
                insights de datos de alta fidelidad que impulsen el crecimiento
                sostenible, la excelencia operativa y la innovación
                transformadora.
              </p>
            </div>

            {/* Vision */}
            <div className="mission-card group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <Eye className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-800 mb-4 tracking-tight">Visión</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ser el referente global definitivo en consultoría
                multidisciplinaria, donde la ciencia de datos se une con la
                intuición humana para resolver los desafíos más complejos del
                mundo.
              </p>
            </div>

            {/* Values */}
            <div className="mission-card group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <ShieldCheck className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-800 mb-4 tracking-tight">Valores</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Integridad en cada cálculo, transparencia radical, innovación
                constante y un compromiso con soluciones centradas en las
                personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Policy Section */}
      <section className="commitment-section py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="commitment-content">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                  Nuestro Compromiso
                </span>

                <h2 className="text-4xl font-800 mb-6 tracking-tight">
                  El Elemento Humano en Cada Byte.
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Más allá de los algoritmos y la arquitectura en la nube,
                  nuestro compromiso principal es con las personas detrás de los
                  datos.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    Alineación estratégica personalizada
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    Participación continua de stakeholders
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    Metodología adaptable para mercados modernos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <div className="policy-section grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 mb-24">
        <div className="policy-card bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-800 mb-4 tracking-tight">
            Política de Calidad y Ética
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Nuestro riguroso marco de Aseguramiento de Calidad garantiza que
            cada entregable cumpla con los más altos estándares globales.
            Operamos bajo un estricto código ético que prohíbe la manipulación
            de datos y promueve la verdad objetiva.
          </p>
          <a
            className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
            href="#"
          >
            Revisar Política
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="policy-card bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-800 mb-4 tracking-tight">
            Confidencialidad de Datos
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            La seguridad no es una característica; es nuestra base. Empleamos
            cifrado de nivel empresarial y estrictos controles de acceso
            internos para proteger su información en cada etapa de nuestra
            consultoría.
          </p>
          <a
            className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
            href="#"
          >
            Protocolo de Seguridad
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Growth */}
      <section className="growth-section py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="growth-content max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-6 tracking-wide uppercase">
              Visión a Largo Plazo
            </span>

            <h2 className="text-4xl md:text-5xl font-800 mb-8 tracking-tight">
              Crecimiento Basado en la Sostenibilidad.
            </h2>

            <p className="text-xl opacity-90 leading-relaxed mb-10">
              Creemos que el verdadero crecimiento no se trata solo de ganancias
              trimestrales, sino de construir sistemas resilientes que perduren.
              Nuestro compromiso con la sostenibilidad integra responsabilidad
              ambiental con escalabilidad económica.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="growth-stat">
                <div className="text-4xl font-800 mb-1">2030</div>
                <div className="text-sm opacity-75 uppercase tracking-widest font-bold">
                  Objetivo Cero Emisiones
                </div>
              </div>

              <div className="growth-stat">
                <div className="text-4xl font-800 mb-1">100%</div>
                <div className="text-sm opacity-75 uppercase tracking-widest font-bold">
                  Nube Renovable
                </div>
              </div>

              <div className="growth-stat">
                <div className="text-4xl font-800 mb-1">50+</div>
                <div className="text-sm opacity-75 uppercase tracking-widest font-bold">
                  Alianzas con ONG
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
