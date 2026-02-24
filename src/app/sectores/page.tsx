"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  LineChart,
  Factory,
  BarChart3,
  Users,
  ArrowRight,
  Scale,
  Globe,
  Map,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectorsPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Hero Animation
      tl.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1.2,
      }).from(
        ".hero-text",
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        "-=0.8",
      );

      // Scroll-triggered Section reveals
      const sections = gsap.utils.toArray<HTMLElement>(".section-block");
      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelector(".section-info"),
          {
            x: section.classList.contains("reverse") ? 50 : -50,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              once: true,
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          section.querySelectorAll(".sector-card"),
          {
            y: 40,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            onComplete: () => {
              ScrollTrigger.refresh();
            },
          },
        );
      });

      // Academic Section
      gsap.fromTo(
        ".academic-title",
        {
          y: 30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#academic",
            start: "top 98%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
        },
      );

      gsap.fromTo(
        ".academic-card",
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#academic",
            start: "top 95%",
            once: true,
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          onComplete: (self: any) => {
            // Force final state and clear inline styles that might interfere with hover
            gsap.set(".academic-card", { clearProps: "opacity,transform" });
          },
        },
      );

      // CTA Animation
      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 90%",
          once: true,
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)",
      });

      // Global refresh to ensure all triggers align
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Experiencia en <span className="text-primary">cada sector.</span>
            </h1>

            <p className="hero-text text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Cerramos la brecha entre conjuntos de datos complejos e
              inteligencia accionable, brindando consultoría especializada
              adaptada a los desafíos únicos de entornos corporativos, públicos
              y académicos.
            </p>
          </div>
        </div>
      </section>

      {/* CORPORATIVO */}
      <SectionBlock
        id="corporate"
        badge="Excelencia Comercial"
        title="Sector Corporativo"
        description="Impulsamos empresas para tomar decisiones basadas en datos que optimicen operaciones, minimicen riesgos y aceleren el crecimiento en mercados competitivos."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmVpLazLP5JTPX7C8SV8wXimsm5z_G5CVIU3aLRYmyU-g6YbOvSR6OVfLUVINJuSQlgKokW2Lh5yT6jkfrrBxcvoELUdeJYQivuDQAvw-mTjfVwXojEDg2Lt_QixmVkKtf8QaCRNzUe6JJFSktfXW7gaGjupWV2PA_aOfxLNsqIsVRIt4JgFUzY3M75L-QTSbLQAfbaQ7CxPbS-CU_t0_4ZNh01NL_onBoetfAdAf_MOb5JiwtadzPoMAJs12vdz0iH8p6wwCremw"
      >
        <Card
          icon={<LineChart />}
          title="Analítica de Mercado"
          text="Monitoreo en tiempo real de tendencias y comportamiento competitivo."
        />
        <Card
          icon={<Factory />}
          title="Optimización de Procesos"
          text="Identificación de cuellos de botella mediante modelado estadístico avanzado."
        />
        <Card
          icon={<BarChart3 />}
          title="Business Intelligence"
          text="Dashboards personalizados y forecasting predictivo de KPIs."
        />
        <Card
          icon={<Users />}
          title="Segmentación de Clientes"
          text="Algoritmos avanzados de clustering para maximizar ROI de marketing."
        />
      </SectionBlock>

      {/* PÚBLICO */}
      <SectionBlock
        id="public"
        reverse
        badge="Gobernanza e Impacto"
        title="Sector Público"
        description="Impulsamos impacto social mediante análisis de políticas públicas y estudios demográficos basados en evidencia."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAioNSiuIgFrZYT1q6QaT5T-G5X35jQv5RFg-obGksaLEcy9f_WnnIvAP-8zme3KNo7QmArHuVOgaRy2bDdvQfue6h3BHg_RONdwoztfxb-Y_sf0ejFs1MeoBRlcOFPTCn1IbJPSqmj2ZvWUWVtqqYDzhBObbm0v5x3YTET00D-zA0xikmLmuJrKlfzV4AMIS1fnzsRR_m7X_Xm1VRTuE-tItexSgglc_cOw0lz1nPNiv0T07XV_LbOTTKNW00cb3AzC1q16n5XWqw"
      >
        <Card
          icon={<Scale />}
          title="Evaluación de Políticas"
          text="Medición rigurosa de eficacia e impacto social."
        />
        <Card
          icon={<Globe />}
          title="Tendencias Demográficas"
          text="Análisis profundo de cambios poblacionales y factores socioeconómicos."
        />
        <Card
          icon={<Map />}
          title="Planificación Urbana"
          text="Uso de datos geoespaciales para infraestructura sostenible."
        />
        <Card
          icon={<HeartPulse />}
          title="Salud Pública"
          text="Monitoreo de resultados sanitarios y optimización de recursos."
        />
      </SectionBlock>

      {/* ACADÉMICO */}
      <section className="py-24" id="academic">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-10">Sector Académico</h2>

          <div className="space-y-8">
            <AcademicCard
              number="01"
              title="Apoyo en Tesis y Disertaciones"
              text="Análisis de datos, modelado estadístico y soporte completo para investigadores."
            />

            <AcademicCard
              number="02"
              title="Validación Estadística"
              text="Revisión independiente y verificación de integridad metodológica."
            />

            <AcademicCard
              number="03"
              title="Datos para Propuestas de Financiamiento"
              text="Justificación cuantitativa para aplicaciones a fondos de investigación."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-600 opacity-50" />
        <div className="cta-content max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-8">
            ¿Listo para transformar tu sector?
          </h2>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Nuestro enfoque multidisciplinario garantiza resultados sin importar
            tu industria.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              Agendar Consultoría
            </button>

            <button className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Descargar PDF de Servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Components */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SectionBlock({
  id,
  badge,
  title,
  description,
  image,
  children,
  reverse,
}: any) {
  return (
    <section
      className={`section-block py-24 border-t border-slate-100 dark:border-slate-800 ${reverse ? "reverse" : ""}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}
        >
          <div className="section-info w-full lg:w-1/3 lg:sticky top-32">
            <div className="text-primary font-bold uppercase text-xs mb-4 tracking-widest">
              {badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
              {description}
            </p>

            <div className="rounded-2xl overflow-hidden relative aspect-video lg:aspect-square group shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card({ icon, title, text }: any) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="sector-card p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 group flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50"
    >
      <div
        ref={iconRef}
        className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
        {text}
      </p>
      <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span className="text-primary font-bold text-sm inline-flex items-center gap-2">
          Ver soluciones <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AcademicCard({ number, title, text }: any) {
  return (
    <div className="academic-card p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-start gap-6 hover:shadow-2xl transition-all duration-500 group border-l-8 border-l-primary hover:-translate-x-2">
      <div className="hidden sm:flex shrink-0 w-20 h-20 bg-primary/5 text-primary rounded-2xl items-center justify-center text-4xl font-black italic group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
