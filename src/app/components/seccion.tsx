"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Sigma,
  TrendingUp,
  Landmark,
  Globe,
  Server,
  CheckCircle,
  Microscope,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registramos el plugin
gsap.registerPlugin(ScrollTrigger);

export default function Seccion() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animación de la Sección de Información
      const tlInfo = gsap.timeline({
        scrollTrigger: {
          trigger: ".seccion-info",
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      tlInfo
        .fromTo(
          ".info-image-reveal",
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            filter: "grayscale(100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            filter: "grayscale(0%)",
            duration: 1.5,
            ease: "power4.inOut",
          },
        )
        .from(
          ".info-badge",
          {
            scale: 0,
            autoAlpha: 0, // Usamos autoAlpha para mejor manejo de visibilidad
            rotation: -15,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.8",
        )
        .from(
          ".info-text",
          {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=1.2",
        )
        .from(
          ".info-stat-item",
          {
            scale: 0.8,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );

      // Animación flotante badge
      gsap.to(".info-badge", {
        y: -10,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Animación de Servicios (CORREGIDA)
      // Usamos .fromTo para garantizar el estado inicial y final
      // Trigger en el grid contenedor para mayor precisión
      gsap.fromTo(
        ".servicio-card",
        {
          y: 100,
          autoAlpha: 0, // opacity: 0 + visibility: hidden
          scale: 0.8,
        },
        {
          scrollTrigger: {
            trigger: ".servicio-grid", // Trigger específico en el grid
            start: "top 90%", // Empieza un poco antes
            toggleActions: "play none none reverse",
          },
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1, // Stagger simple
          ease: "back.out(1.7)",
        },
      );

      // 3. Animación de Metodología
      const tlMetodologia = gsap.timeline({
        scrollTrigger: {
          trigger: ".seccion-metodologia",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tlMetodologia
        .from(".metodo-title", {
          x: -50,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".metodo-check",
          {
            x: -30,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".metodo-card",
          {
            y: 60,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // 4. Animación CTA
      gsap.from(".cta-container", {
        scrollTrigger: {
          trigger: ".seccion-cta",
          start: "top 85%",
        },
        scale: 0.9,
        autoAlpha: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".cta-bg-parallax", {
        scrollTrigger: {
          trigger: ".seccion-cta",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* SECCIÓN INFORMACIÓN */}
      <section className="seccion-info py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative info-image">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="info-image-reveal relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl z-10 bg-slate-200 dark:bg-slate-800">
                <Image
                  alt="Team Meeting"
                  src="/images2.jpg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="info-badge absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl z-20 hidden md:block border-4 border-white dark:border-slate-900">
                <p className="text-white font-bold text-4xl mb-1">15+</p>
                <p className="text-primary-foreground/80 text-white/80 text-sm font-medium">
                  Años de experiencia
                  <br />
                  en el mercado global
                </p>
              </div>
            </div>
            <div>
              <h2 className="info-text text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                Excelencia técnica para un{" "}
                <span className="text-primary">mundo complejo</span>
              </h2>
              <p className="info-text text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                En STATCONT, entendemos que los datos por sí solos son solo
                ruido. Nuestra misión es procesar esa información a través de un
                lente multidisciplinario para revelar oportunidades estratégicas
                que otros pasan por alto.
              </p>
              <p className="info-text text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Combinamos el rigor de la academia con la agilidad del mundo
                corporativo, asegurando que cada recomendación esté respaldada
                por modelos matemáticos sólidos.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="info-stat-item">
                  <p className="text-primary font-bold text-4xl mb-1">98%</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Precisión en proyecciones
                  </p>
                </div>
                <div className="info-stat-item">
                  <p className="text-primary font-bold text-4xl mb-1">250+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Proyectos ejecutados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section
        className="seccion-servicios py-32 bg-slate-50 dark:bg-background-dark/30"
        id="servicios"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Nuestras Soluciones
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Áreas de Especialización
            </h3>
          </div>
          {/* Añadimos clase 'servicio-grid' para el trigger específico */}
          <div className="servicio-grid grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Sigma,
                title: "Estadística",
                desc: "Modelado predictivo y análisis de probabilidad avanzado.",
              },
              {
                icon: TrendingUp,
                title: "Mercado",
                desc: "Investigación profunda del consumidor y tendencias.",
              },
              {
                icon: Landmark,
                title: "Finanzas",
                desc: "Valuación de activos y gestión de riesgos financieros.",
              },
              {
                icon: Globe,
                title: "Economía",
                desc: "Análisis macroeconómico y consultoría de políticas.",
              },
              {
                icon: Server,
                title: "Sistemas",
                desc: "Arquitectura de datos e infraestructura digital.",
              },
            ].map((servicio, index) => (
              <div
                key={index}
                className="servicio-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group shadow-sm flex flex-col items-center text-center lg:text-left lg:items-start"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <servicio.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {servicio.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {servicio.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA */}
      <section
        className="seccion-metodologia py-24 bg-white dark:bg-background-dark"
        id="metodologia"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 pt-8">
              <h3 className="metodo-title text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Por qué confiar en nuestra metodología
              </h3>
              <p className="metodo-title text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                No solo entregamos reportes; construimos marcos de decisión
                robustos que evolucionan con su negocio.
              </p>
              <div className="space-y-6">
                {[
                  "Transparencia Algorítmica",
                  "Soporte Continuo 24/7",
                  "Ética de Datos Rigurosa",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="metodo-check flex items-center gap-4 text-slate-700 dark:text-slate-300"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Rigor Científico",
                  desc: "Validación exhaustiva bajo estándares internacionales de investigación.",
                },
                {
                  icon: Users,
                  title: "Enfoque Integral",
                  desc: "Expertos de diversas áreas colaborando en una única solución coherente.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovación",
                  desc: "Implementación de IA y Machine Learning de última generación.",
                },
              ].map((metodo, index) => (
                <div
                  key={index}
                  className="metodo-card p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="text-primary mb-6 p-4 bg-white dark:bg-slate-900 rounded-full shadow-md">
                    <metodo.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                    {metodo.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {metodo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA FINAL */}
      <section className="seccion-cta py-24  text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="cta-container relative bg-primary  p-12 lg:p-24 overflow-hidden text-center lg:text-left shadow-2xl rounded-2xl">
            {/* Elemento de fondo para Parallax */}
            <div className="cta-bg-parallax absolute -top-1/2 -right-1/2 w-[150%] h-[200%] bg-linear-to-br from-white/10 to-transparent pointer-events-none rounded-full blur-3xl"></div>

            <div className="relative z-10 lg:flex items-center justify-between gap-12">
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  ¿Listo para transformar su estrategia?
                </h2>
                <p className="text-white/90 text-xl max-w-xl font-medium">
                  Hablemos sobre cómo nuestras soluciones analíticas pueden
                  impulsar sus resultados hoy mismo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0">
                <button className="bg-white text-primary hover:bg-slate-50 px-10 py-5  font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95 ring-4 ring-white/20 rounded-2xl">
                  Agendar Llamada
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
