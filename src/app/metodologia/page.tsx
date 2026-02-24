"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Search,
  Building2,
  Database,
  LineChart,
  CheckSquare,
  Presentation,
  Rocket,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MethodologySection() {
  const container = useRef(null);
  const sidebarRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Hero Animation
      tl.fromTo(
        ".meto-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
      )
        .fromTo(
          ".meto-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          "-=0.5",
        )
        .fromTo(
          ".meto-text",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        );

      // Responsive matching
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Pinning logic for Sidebar
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 100px",
          end: "bottom bottom",
          pin: sidebarRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      // Sidebar Rigor Reveal
      gsap.fromTo(
        ".rigor-card",
        { x: -40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".rigor-card",
            start: "top 90%",
            once: true,
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".rigor-item",
        { x: -20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".rigor-card",
            start: "top 80%",
            once: true,
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".rigor-image-wrap",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".rigor-card",
            start: "top 70%",
            once: true,
          },
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        },
      );

      // Methodology Steps Reveal
      const steps = gsap.utils.toArray<HTMLElement>(".step-item");
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: step,
              start: "top 95%",
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i % 2 === 0 ? 0 : 0.1, // Slight offset for visual flow
            ease: "power3.out",
            onComplete: () => {
              gsap.set(step, { clearProps: "opacity,transform" });
              ScrollTrigger.refresh();
            },
          },
        );
      });

      // Global refresh
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden bg-white dark:bg-background-dark">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="meto-badge inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestro Enfoque
          </span>

          <h1 className="meto-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Un Marco Riguroso para{" "}
            <span className="text-primary">Insights Accionables</span>
          </h1>

          <p className="meto-text text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cerramos la brecha entre datos complejos y ejecución estratégica
            mediante un proceso multidisciplinario de 7 pasos diseñado para
            precisión y escalabilidad.
          </p>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative"
          >
            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-4 self-start">
              <div className="rigor-card bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                  Nuestro Rigor
                </h3>

                <div className="space-y-8">
                  <div className="rigor-item flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Seguridad de Datos
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Cumplimiento total con protocolos SOC2 y cifrado de
                        grado militar para su información.
                      </p>
                    </div>
                  </div>

                  <div className="rigor-item flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <BadgeCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Control de Calidad
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Validación sistemática en tres niveles para garantizar
                        la integridad de cada hallazgo.
                      </p>
                    </div>
                  </div>

                  <div className="rigor-item flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Mentoria Experta
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Revisión crítica por especialistas senior en ciencia de
                        datos y estrategia de negocios.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rigor-image-wrap mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-RhkIu4u--Z1_Dm6hj1AOZP_UxxaNCrPifJHsDX5_2FrokcBOnk1u35G4jSLE1ADqouf_YFPXPYcB2i4kCoIY3lB5G8ZA0bUnIlW4W2FOXnolwAHvBEzN9oIexbZcmi-VwBxdKO6NyQWnNP0ti5xsMrj3Yf_RUEJjespXmA-YkIOLst6W7B-0Rx8WhOBRq38sA7rXLaQzOlm4dhO5Qe-Asyl9rysIbyB4MdMHSUGoNmWr4QEWlFlr3ryIMlnBM2pMrvMwtND7NJ4"
                    alt="Analítica Visual"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Paso 01 */}
              <Step
                number="01"
                icon={<Search className="w-6 h-6" />}
                title="Diagnóstico Estratégico"
                description="Identificamos las raíces del problema mediante entrevistas profundas y auditorías iniciales de sus flujos de información."
              />

              <Step
                number="02"
                icon={<Building2 className="w-6 h-6" />}
                title="Diseño Metodológico"
                description="Creamos el blueprint de la solución: definiendo modelos estadísticos, fuentes de datos y criterios de éxito."
              />

              <Step
                number="03"
                icon={<Database className="w-6 h-6" />}
                title="Ingeniería de Datos"
                description="Consolidamos, limpiamos y estructuramos datos de múltiples silos en una base sólida y confiable para su análisis."
              />

              <Step
                number="04"
                icon={<LineChart className="w-6 h-6" />}
                title="Modelado Avanzado"
                description="Utilizamos algoritmos de vanguardia para detectar patrones ocultos, proyecciones futuras y correlaciones clave."
              />

              <Step
                number="05"
                icon={<CheckSquare className="w-6 h-6" />}
                title="Sometimiento a Prueba"
                description="Sometemos los resultados a pruebas de estrés y validación técnica para asegurar que las conclusiones sean infalibles."
              />

              <Step
                number="06"
                icon={<Presentation className="w-6 h-6" />}
                title="Narrativa de Datos"
                description="Traducimos hallazgos técnicos complejos en dashboards ejecutivos e historias visuales fáciles de digerir."
              />

              <Step
                number="07"
                highlight
                icon={<Rocket className="w-6 h-6" />}
                title="Aceleración Estratégica"
                description="Entregamos el roadmap de implementación inmediata para capturar valor y maximizar su retorno de inversión."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Componente Step reutilizable con efecto 3D Tilt */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Step({ number, icon, title, description, highlight = false }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation: max 15 degrees
    const xPercent = (x / width - 0.5) * 20;
    const yPercent = (y / height - 0.5) * -20;

    gsap.to(cardRef.current, {
      rotateY: xPercent,
      rotateX: yPercent,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - 150,
        y: y - 150,
        opacity: 0.15,
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="step-item relative flex gap-8 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-xl overflow-hidden group perspective-1000 transition-colors duration-500 hover:border-primary/30"
    >
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none w-[300px] h-[300px] bg-primary rounded-full blur-[100px] opacity-0"
      />

      <div
        className={`flex-shrink-0 w-20 h-20 border-4 border-primary/20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 group-hover:border-primary group-hover:shadow-primary/20 ${
          highlight ? "ring-4 ring-primary/20" : ""
        }`}
      >
        <span
          className={`font-black text-3xl italic ${highlight ? "text-primary" : "text-slate-400 group-hover:text-primary"} transition-colors duration-500`}
        >
          {number}
        </span>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/5 rounded-xl text-primary transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
            {icon}
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-500">
            {title}
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl font-medium">
          {description}
        </p>
      </div>

      {/* Decorative arrow or element */}
      <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <div className="w-12 h-[2px] bg-primary/30 relative after:content-[''] after:absolute after:right-0 after:-top-1 after:w-2 after:h-2 after:border-r-2 after:border-t-2 after:border-primary/30 after:rotate-45" />
      </div>
    </div>
  );
}
