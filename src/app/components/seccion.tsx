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
import ScrollToTop from "./ScrollToTop";
import Link from "next/link";
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

      // 4. Animación de Proyectos
      const tlProyectos = gsap.timeline({
        scrollTrigger: {
          trigger: ".seccion-proyectos",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tlProyectos
        .from(".seccion-proyectos h2, .seccion-proyectos h3", {
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        })
        .from(
          ".seccion-proyectos .flex-shrink-0",
          {
            x: 100,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.4",
        );

      // 5. Animación de Equipo
      gsap.fromTo(
        ".team-card",
        {
          y: 60,
          autoAlpha: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
      );

      // 6. Animación CTA (Refinada)
      const tlCTA = gsap.timeline({
        scrollTrigger: {
          trigger: ".seccion-cta",
          start: "top 80%",
        },
      });

      tlCTA
        .from(".cta-container", {
          scale: 0.95,
          autoAlpha: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".cta-title, .cta-desc, .cta-btn",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5",
        );
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
                <p className="text-white font-bold text-4xl mb-1">100%</p>
                <p className="text-white/80 text-sm font-medium">
                  Proyectos
                  <br />a medida
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
                  <p className="text-primary font-bold text-4xl mb-1">100%</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Enfoque en soluciones a medida
                  </p>
                </div>
                <div className="info-stat-item">
                  <p className="text-primary font-bold text-4xl mb-1">1 a 1</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Acompañamiento directo
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

      {/* SECCIÓN PROYECTOS (SCROLL HORIZONTAL) */}
      <section
        className="seccion-proyectos py-32 bg-white dark:bg-background-dark overflow-hidden"
        id="proyectos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Nuestros Proyectos
          </h3>
        </div>

        <div
          className="flex overflow-x-auto gap-8 px-4 sm:px-6 lg:px-[10%] pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => {
            const el = e.currentTarget;
            el.classList.add("grabbing");
            el.setAttribute("data-scroll-left", el.scrollLeft.toString());
            el.setAttribute("data-click-x", e.pageX.toString());
            el.style.scrollSnapType = "none";
          }}
          onMouseMove={(e) => {
            const el = e.currentTarget;
            if (!el.classList.contains("grabbing")) return;
            e.preventDefault();
            const clickX = parseInt(el.getAttribute("data-click-x") || "0");
            const scrollLeft = parseInt(
              el.getAttribute("data-scroll-left") || "0",
            );
            const walk = (e.pageX - clickX) * 2;
            el.scrollLeft = scrollLeft - walk;
          }}
          onMouseUp={(e) => {
            const el = e.currentTarget;
            el.classList.remove("grabbing");
            el.style.scrollSnapType = "x mandatory";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.classList.remove("grabbing");
            el.style.scrollSnapType = "x mandatory";
          }}
        >
          {[
            {
              title: "E-commerce Corporativo",
              category: "Comercio Electrónico",
              desc: "Plataformas de venta online optimizadas para conversión, escalabilidad y gestión eficiente.",
              image: "/bac.jpg",
            },
            {
              title: "Sistema de Gestión de Inventarios",
              category: "Sistemas de Información",
              desc: "Control centralizado de stock, pedidos y productos para operaciones comerciales eficientes.",
              image: "/bac.jpg",
            },
            {
              title: "Landing Page Estratégica",
              category: "Marketing Digital",
              desc: "Páginas de aterrizaje enfocadas en captación de leads y conversión de clientes.",
              image: "/bac.jpg",
            },
            {
              title: "Sistema Web Empresarial",
              category: "Soluciones a Medida",
              desc: "Desarrollo de sistemas web personalizados alineados a procesos y objetivos del negocio.",
              image: "/bac.jpg",
            },
          ].map((project, index) => (
            <Link
              href="/proximo"
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[650px] aspect-video relative rounded-3xl overflow-hidden group snap-center shadow-xl cursor-alias"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-primary-foreground/80 text-white/70 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </p>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
                <p className="text-white/0 group-hover:text-white/80 text-sm font-medium leading-relaxed max-w-xs transition-all duration-500 delay-150 overflow-hidden line-clamp-2">
                  {project.desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECCIÓN EQUIPO */}
      <section className="seccion-equipo py-32 bg-slate-50 dark:bg-background-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Nuestro Equipo
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Conoce al equipo
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Combinamos análisis, experiencia y desarrollo web para crear
              plataformas que generan valor y resultados medibles.
            </p>
          </div>

          <div className="team-grid flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Carlos David",
                role: "Especialista en Sistemas",
                specialty: "Tecnología y Sistemas de Información",
                image: "/bac.jpg",
              },
              {
                name: "Uriel ",
                role: "Especialista en Análisis de datos",
                specialty: "Inteligencia y Análisis de Datos",
                image: "/bac.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="team-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>

                <div className="p-8 relative">
                  <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {member.specialty}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm font-bold text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA FINAL */}
      <section className="seccion-cta py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-container relative bg-primary p-12 lg:p-24 overflow-hidden text-center lg:text-left shadow-2xl rounded-3xl border border-white/10">
            {/* Elemento de fondo para Parallax */}
            <div className="cta-bg-parallax absolute -top-1/2 -right-1/2 w-[150%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none rounded-full blur-3xl"></div>

            {/* Imagen Decorativa de fondo (Derecha) */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] opacity-60 pointer-events-none z-0">
              <Image src="/Group.svg" alt="" fill className="object-contain" />
            </div>

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
                <Link href="/contacto" className="group boton">
                  <span className="boton-content">
                    Agendar Llamada
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
