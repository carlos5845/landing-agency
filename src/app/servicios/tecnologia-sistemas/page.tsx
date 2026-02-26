"use client";

import React, { useRef } from "react";
import {
  Database,
  Monitor,
  Layout,
  Zap,
  CheckCircle,
  ArrowRight,
  Settings,
  ShieldCheck,
  Cpu,
  BarChart3,
  LineChart,
  Code2,
  PieChart,
  RefreshCcw,
  Users,
  Search,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TecnologiaSistemasPage() {
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
              <Database size={16} />
              <span>Tecnología y Sistemas de Información</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Tecnología y Sistemas para una{" "}
              <span className="text-primary italic">gestión inteligente</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Desarrollamos soluciones tecnológicas que optimizan procesos,
              centralizan información y fortalecen la toma de decisiones en
              tiempo real.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto?servicio=tecnologia"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                Solicitar solución tecnológica
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto?servicio=tecnologia"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <Search size={18} />
                Agendar diagnóstico digital
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EL DESAFÍO & 3. SOLUCIÓN */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Monitor className="text-primary" />
                El reto de la gestión moderna
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Muchas organizaciones operan con procesos manuales, sistemas
                fragmentados y reportes poco confiables. Esto genera
                ineficiencia, errores y pérdida de oportunidades estratégicas.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Tecnología aplicada a la estrategia
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Diseñamos e implementamos sistemas de información personalizados
                que integran datos, automatizan procesos y generan
                visualizaciones estratégicas para mejorar la eficiencia
                organizacional.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminación de silos de información",
                  "Automatización de flujos de trabajo críticos",
                  "Dashboards para monitoreo en vivo",
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

      {/* 4. SOLUCIONES QUE INCLUYE ESTE PILAR */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Arquitectura de Soluciones
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Infraestructura digital robusta para el crecimiento sostenible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 cards-grid">
            {/* Desarrollo de Sistemas */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">Desarrollo de Sistemas</h3>
              <ul className="space-y-3 mt-auto">
                {[
                  "Sistemas de gestión empresarial",
                  "Plataformas administrativas",
                  "Sistemas de registro y control",
                  "Integración de bases de datos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <CheckCircle className="text-primary" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboards y Visualización */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">
                Dashboards y Visualización
              </h3>
              <ul className="space-y-3">
                {[
                  "Paneles de control interactivos",
                  "Reportes automatizados",
                  "Indicadores en tiempo real (KPIs)",
                  "Visualización ejecutiva",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <CheckCircle className="text-blue-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automatización de Procesos */}
            <div className="animate-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">
                Automatización de Procesos
              </h3>
              <ul className="space-y-3">
                {[
                  "Automatización de reportes",
                  "Integración de fuentes de datos",
                  "Optimización de flujos",
                  "Reducción de tareas manuales",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <CheckCircle className="text-purple-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA DE IMPLEMENTACIÓN */}
      <section className="py-24 px-6 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Ciclo de Implementación Digital
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Estructura y profesionalismo en cada despliegue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico tecnológico", icon: <Search /> },
              { step: "2", title: "Diseño funcional", icon: <Layout /> },
              { step: "3", title: "Desarrollo e integración", icon: <Code2 /> },
              { step: "4", title: "Capacitación", icon: <Users /> },
              { step: "5", title: "Soporte y mejora", icon: <RefreshCcw /> },
            ].map((phase, i) => (
              <div
                key={i}
                className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  {phase.step}
                </div>
                <div className="text-slate-400 mb-4 group-hover:text-primary transition-colors">
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
                Beneficios de la Modernización
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Reduce errores humanos",
                    desc: "Sustituya procesos manuales por lógica de sistema infalible.",
                  },
                  {
                    title: "Aumenta eficiencia operativa",
                    desc: "Libere tiempo de su equipo para tareas de alto valor.",
                  },
                  {
                    title: "Centraliza información crítica",
                    desc: "Una sola fuente de verdad para toda la organización.",
                  },
                  {
                    title: "Mejora control y monitoreo",
                    desc: "Supervisión total de cada etapa del proceso institucional.",
                  },
                  {
                    title: "Decisiones en tiempo real",
                    desc: "Información actualizada al minuto para respuestas rápidas.",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-primary flex items-center justify-center shadow-sm">
                      <CheckCircle2 size={18} />
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
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-blue-400 rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <Cpu size={300} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-green-400 rounded-lg" />
                      <div className="space-y-1">
                        <div className="h-2 w-24 bg-white/40 rounded-full" />
                        <div className="h-2 w-16 bg-white/20 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-white/20 rounded-full w-full" />
                      <div className="h-1 bg-white/20 rounded-full w-[80%]" />
                      <div className="h-1 bg-white/20 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TIPO DE ORGANIZACIONES */}
      <section className="py-24 px-6 reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Impulsando diversos sectores
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Empresas privadas",
              "Instituciones públicas",
              "Proyectos de inversión",
              "Organizaciones masivas de datos",
            ].map((type, i) => (
              <div
                key={i}
                className="px-8 py-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-bold shadow-sm hover:translate-y-[-2px] transition-all"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL ESTRATÉGICO */}
      <section className="py-24 px-6 relative reveal-section">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 relative z-10">
            Modernice su gestión con soluciones tecnológicas inteligentes
          </h2>
          <Link
            href="/contacto?servicio=tecnologia"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl relative z-10"
          >
            Solicitar diagnóstico digital
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-20 bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900/50" />
    </div>
  );
}
