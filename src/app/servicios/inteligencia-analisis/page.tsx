"use client";

import React, { useRef } from "react";
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  Activity,
  PieChart,
  Target,
  FileSearch,
  Cpu,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InteligenciaAnalisisPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Hero Animations
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

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
            toggleActions: "play none none none",
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
              <BarChart3 size={16} />
              <span>Inteligencia y Análisis de Datos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Inteligencia y Análisis de Datos para{" "}
              <span className="text-primary italic">
                decisiones estratégicas
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Convertimos información cuantitativa en conocimiento accionable
              mediante análisis estadístico avanzado y metodologías rigurosas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto?servicio=analisis"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                Solicitar asesoría
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto?servicio=analisis"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <Calendar size={18} />
                Agendar reunión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EL PROBLEMA & 3. SOLUCIÓN (Integrated for flow) */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="text-primary" />
                El desafío
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Las organizaciones generan grandes volúmenes de datos, pero
                carecen de herramientas y metodologías adecuadas para
                transformarlos en decisiones estratégicas. La falta de análisis
                profundo incrementa la incertidumbre y el riesgo.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Nuestra propuesta de valor
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Aplicamos modelos estadísticos, análisis econométrico y técnicas
                avanzadas de investigación para identificar patrones, predecir
                escenarios y optimizar resultados.
              </p>
              <div className="space-y-4">
                {[
                  "Modelado de impacto basado en evidencia",
                  "Reducción de sesgos en la toma de decisiones",
                  "Escalabilidad analítica para grandes infraestructuras",
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

      {/* 4. SUBSERVICIOS */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros Pilares Analíticos
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Especialización técnica con enfoque de mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 cards-grid">
            {/* Estadística Aplicada */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Estadística Aplicada</h3>
              <ul className="space-y-4">
                {[
                  "Modelos predictivos avanzados",
                  "Análisis multivariante",
                  "Diseño muestral probabilístico",
                  "Series de tiempo",
                  "Modelos de regresión",
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

            {/* Investigación de Mercado */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Investigación de Mercado
              </h3>
              <ul className="space-y-4">
                {[
                  "Segmentación de audiencia",
                  "Análisis del comportamiento del consumidor",
                  "Estudios de benchmarking",
                  "Encuestas y procesamiento de datos",
                  "Validación de demanda",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle className="text-blue-500" size={16} />
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
              Nuestro Proceso Estratégico
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Rigor metodológico en cada etapa del proyecto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico de datos",
                icon: <FileSearch />,
              },
              { step: "2", title: "Diseño metodológico", icon: <Layers /> },
              { step: "3", title: "Modelamiento y análisis", icon: <Cpu /> },
              {
                step: "4",
                title: "Interpretación y estrategia",
                icon: <TrendingUp />,
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:translate-y-[-5px] transition-transform duration-300"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-xl font-bold shadow-lg">
                  0{phase.step}
                </div>
                <div className="text-primary mb-4 w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                  {phase.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
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
                Beneficios para su Organización
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Reduce la incertidumbre",
                    desc: "Base sus decisiones en evidencia técnica no en suposiciones.",
                  },
                  {
                    title: "Optimización de recursos",
                    desc: "Identifique ineficiencias y reasigne presupuesto estratégicamente.",
                  },
                  {
                    title: "Visión predictiva",
                    desc: "Anticipe cambios en el entorno y trends de mercado.",
                  },
                  {
                    title: "Sustento corporativo",
                    desc: "Valore sus propuestas ante directorios con rigor estadístico.",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Riesgo", val: "-40%", color: "text-red-500" },
                { label: "Eficiencia", val: "+25%", color: "text-green-500" },
                { label: "Crecimiento", val: "x2", color: "text-primary" },
                { label: "Precisión", val: "99%", color: "text-blue-500" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center"
                >
                  <p className="text-xs uppercase font-bold text-slate-400 mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-4xl font-black ${stat.color}`}>
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTORES DONDE APLICA */}
      <section className="py-24 px-6 reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Universalidad de nuestra metodología
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Sector público",
              "Empresas privadas",
              "ONGs",
              "Proyectos de inversión",
              "Instituciones académicas",
            ].map((sector, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 shadow-sm hover:border-primary transition-all"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL FUERTE */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 relative z-10">
            Transforme sus datos en decisiones estratégicas
          </h2>
          <Link
            href="/contacto?servicio=analisis"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl relative z-10"
          >
            Agendar consultoría estratégica
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-20 bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900/50" />
    </div>
  );
}
