"use client";

import Image from "next/image";
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

export default function MethodologySection() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden bg-white dark:bg-background-dark">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestro Enfoque
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Un Marco Riguroso para{" "}
            <span className="text-primary">Insights Accionables</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cerramos la brecha entre datos complejos y ejecución estratégica
            mediante un proceso multidisciplinario de 7 pasos diseñado para
            precisión y escalabilidad.
          </p>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  El Rigor
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Estándares de Seguridad
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manejo de datos compatible con SOC2 y protocolos de
                        almacenamiento encriptado.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Aseguramiento de Calidad
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Proceso de validación en triple capa para cada modelo
                        analítico producido.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        Supervisión Experta
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Paneles de revisión multidisciplinarios con científicos
                        de datos nivel PhD.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-RhkIu4u--Z1_Dm6hj1AOZP_UxxaNCrPifJHsDX5_2FrokcBOnk1u35G4jSLE1ADqouf_YFPXPYcB2i4kCoIY3lB5G8ZA0bUnIlW4W2FOXnolwAHvBEzN9oIexbZcmi-VwBxdKO6NyQWnNP0ti5xsMrj3Yf_RUEJjespXmA-YkIOLst6W7B-0Rx8WhOBRq38sA7rXLaQzOlm4dhO5Qe-Asyl9rysIbyB4MdMHSUGoNmWr4QEWlFlr3ryIMlnBM2pMrvMwtND7NJ4"
                    alt="Dashboard de visualización de datos abstractos con acentos azules"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-xs text-slate-500 italic">
                    Metodología certificada bajo estándares industriales 2024.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="lg:col-span-8">
              {/* Paso 01 */}
              <Step
                number="01"
                icon={<Search className="w-5 h-5 text-primary/60" />}
                title="Diagnóstico del Problema"
                description="Analizamos profundamente tu organización para identificar desafíos clave, objetivos estratégicos y puntos de fricción que requieren soluciones basadas en datos."
              />

              <Step
                number="02"
                icon={<Building2 className="w-5 h-5 text-primary/60" />}
                title="Diseño Metodológico"
                description="Desarrollo de un marco de investigación personalizado, seleccionando KPIs, modelos matemáticos y herramientas estadísticas adecuadas."
              />

              <Step
                number="03"
                icon={<Database className="w-5 h-5 text-primary/60" />}
                title="Recolección de Datos"
                description="Obtención de datos de alta fidelidad desde sistemas internos y fuentes externas, asegurando limpieza y normalización rigurosa."
              />

              <Step
                number="04"
                icon={<LineChart className="w-5 h-5 text-primary/60" />}
                title="Análisis y Modelado"
                description="Aplicación de analítica avanzada y machine learning para transformar datos en patrones estructurados y hallazgos preliminares."
              />

              <Step
                number="05"
                icon={<CheckSquare className="w-5 h-5 text-primary/60" />}
                title="Interpretación y Validación"
                description="Revisión por pares y validación contra datos históricos y escenarios reales del sector."
              />

              <Step
                number="06"
                icon={<Presentation className="w-5 h-5 text-primary/60" />}
                title="Presentación de Resultados"
                description="Entrega de reportes ejecutivos visuales y dashboards interactivos que convierten datos complejos en decisiones claras."
              />

              <Step
                number="07"
                highlight
                icon={<Rocket className="w-5 h-5 text-primary" />}
                title="Recomendaciones Estratégicas"
                description="Roadmap estratégico con acciones priorizadas y proyecciones de ROI para la siguiente fase de crecimiento."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Componente Step reutilizable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Step({ number, icon, title, description, highlight = false }: any) {
  return (
    <div className="relative flex gap-8 mb-16 group">
      <div
        className={`flex-shrink-0 w-16 h-16 border-4 border-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
          highlight ? "bg-primary text-white" : "bg-white dark:bg-slate-900"
        }`}
      >
        <span
          className={`font-extrabold text-xl ${highlight ? "text-white" : "text-primary"}`}
        >
          {number}
        </span>
      </div>

      <div className="flex-grow pt-2">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
