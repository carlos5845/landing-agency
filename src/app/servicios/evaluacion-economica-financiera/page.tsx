"use client";

import React, { useRef } from "react";
import {
  DollarSign,
  TrendingUp,
  Landmark,
  CheckCircle,
  ArrowRight,
  Target,
  FileText,
  PieChart,
  ShieldCheck,
  Building,
  Users,
  Globe,
  Briefcase,
  AlertTriangle,
  BarChart,
  Calendar,
  CheckCircle2,
  Activity,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EvaluacionEconomicaFinancieraPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Hero Animations
      gsap.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      );

      // Section Animations
      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
        );
      });

      // Cards Animation
      gsap.fromTo(
        ".animate-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-slate-50 dark:bg-slate-950 min-h-screen font-inter overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto hero-content">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <DollarSign size={16} />
              <span>Evaluación Económica y Financiera</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Evaluación Económica y Financiera para{" "}
              <span className="text-primary italic">
                decisiones de alto impacto
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Analizamos la viabilidad, rentabilidad y sostenibilidad de
              proyectos, inversiones y políticas públicas mediante metodologías
              técnicas rigurosas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                Solicitar evaluación
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <Calendar size={18} />
                Agendar reunión estratégica
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EL DESAFÍO & 3. SOLUCIÓN */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 relative group overflow-hidden order-2 lg:order-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500" />
                El reto de decidir con fundamento
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Las decisiones de inversión, financiamiento o implementación de
                proyectos requieren análisis técnicos sólidos. Sin una
                evaluación económica y financiera adecuada, el riesgo aumenta y
                la sostenibilidad se compromete.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Evaluación con enfoque estratégico
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Integramos herramientas de análisis económico, modelamiento
                financiero y evaluación de impacto para garantizar decisiones
                respaldadas por evidencia cuantitativa y criterios técnicos
                sólidos.
              </p>
              <div className="space-y-4">
                {[
                  "Optimización de la estructura de capital",
                  "Análisis de viabilidad multi-escenario",
                  "Medición de impacto económico real",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ÁREAS QUE INTEGRA ESTE PILAR */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Áreas de Especialización
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Sinergia entre análisis económico y rigor financiero.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 cards-grid">
            {/* Economía Estratégica */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Economía Estratégica</h3>
              <ul className="space-y-4">
                {[
                  "Estudios sectoriales detallados",
                  "Evaluación de proyectos de inversión",
                  "Análisis costo-beneficio",
                  "Análisis costo-efectividad",
                  "Evaluación de impacto económico",
                  "Proyecciones macro y microeconómicas",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle className="text-primary" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contabilidad y Finanzas */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-6">
                <BarChart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Contabilidad y Finanzas
              </h3>
              <ul className="space-y-4">
                {[
                  "Modelos financieros",
                  "Flujo de caja proyectado",
                  "Cálculo de VAN y TIR",
                  "Análisis de riesgo financiero",
                  "Auditoría y revisión financiera",
                  "Planeamiento fiscal estratégico",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle className="text-green-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA DE TRABAJO */}
      <section className="py-24 px-6 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Metodología de Evaluación
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Un proceso estructurado para garantizar resultados técnicos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Diagnóstico técnico", icon: <Target /> },
              { step: "2", title: "Construcción del modelo", icon: <Cpu /> },
              {
                step: "3",
                title: "Simulación de escenarios",
                icon: <Activity />,
              },
              {
                step: "4",
                title: "Evaluación de riesgos",
                icon: <ShieldCheck />,
              },
              {
                step: "5",
                title: "Informe y estrategia",
                icon: <TrendingUp />,
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:translate-y-[-5px] transition-transform duration-300"
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg font-bold shadow-lg text-sm">
                  0{phase.step}
                </div>
                <div className="text-primary mb-4 w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                  {phase.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                  {phase.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFICIOS CLAVE */}
      <section className="py-24 px-6 bg-primary/5 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Beneficios Estratégicos
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Reduce riesgo",
                    desc: "Minimización de incertidumbre en inversiones clave.",
                  },
                  {
                    title: "Sustento técnico",
                    desc: "Respaldo sólido ante inversionistas y directorios.",
                  },
                  {
                    title: "Optimización",
                    desc: "Asignación eficiente de recursos financieros.",
                  },
                  {
                    title: "Planificación",
                    desc: "Mejora sustancial en la proyección financiera.",
                  },
                  {
                    title: "Impacto real",
                    desc: "Evaluación precisa del retorno económico y social.",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2
                      className="text-primary shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold opacity-60 uppercase">
                      Viabilidad
                    </span>
                    <span className="text-sm font-black text-green-500">
                      94%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[94%]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold opacity-60 uppercase">
                      Rentabilidad (TIR)
                    </span>
                    <span className="text-sm font-black text-primary">
                      +28%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold opacity-60 uppercase">
                      Retorno (VAN)
                    </span>
                    <span className="text-sm font-black text-primary">
                      S/ 4.2M
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TIPOS DE CLIENTES */}
      <section className="py-24 px-6 reveal-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Clientes y Aliados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Empresas privadas", icon: <Building /> },
              { name: "Inversionistas", icon: <TrendingUp /> },
              { name: "Entidades públicas", icon: <Landmark /> },
              { name: "ONG y Cooperación", icon: <Users /> },
              { name: "Infraestructura", icon: <Briefcase /> },
            ].map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary transition-all group"
              >
                <div className="text-slate-400 group-hover:text-primary transition-colors">
                  {React.cloneElement(client.icon as any, {
                    size: 32,
                  })}
                </div>
                <span className="font-bold text-center text-sm">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL ESTRATÉGICO */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-primary/20 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden border border-slate-800 dark:border-primary/30">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10">
            Evalúe antes de invertir
          </h2>
          <p className="text-lg text-slate-400 dark:text-slate-300 mb-10 relative z-10 max-w-xl mx-auto">
            Tome decisiones con respaldo técnico y visión estratégica. Minimice
            el riesgo y maximice la sostenibilidad.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/40 relative z-10"
          >
            Agendar evaluación técnica
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-20 bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900/50" />
    </div>
  );
}

// Helper for dynamic icon in methodology
function Cpu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
