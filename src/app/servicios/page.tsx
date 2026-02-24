import {
  ChevronRight,
  Building2,
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
  Landmark,
  Globe,
  Terminal,
} from "lucide-react";
export default function ServicesSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Soluciones{" "}
              <span className="text-primary">Multidisciplinarias</span> Basadas
              en Datos
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-inter">
              Transformamos información compleja en decisiones estratégicas.
              Nuestra arquitectura de servicios integra cinco pilares
              fundamentales para impulsar la eficiencia y el crecimiento de su
              organización mediante análisis técnico avanzado.
            </p>
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -z-0 opacity-10 dark:opacity-5">
          <Building2 className="w-[400px] h-[400px] text-primary select-none" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="service-card group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5">
              <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Trophy className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Estadística Aplicada
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Convertimos datos crudos en conocimiento accionable mediante
                rigor científico y metodologías de vanguardia.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Modelos Predictivos Avanzados</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Análisis Multivariante</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Muestreo Probabilístico</span>
                </li>
              </ul>

              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                href="#"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Pillar 2 */}
            <div className="service-card group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5">
              <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Investigación de Mercado
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Entendemos la dinámica del consumidor y las tendencias del
                sector para posicionar su marca estratégicamente.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Segmentación de Audiencia</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Comportamiento del Consumidor</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Estudios de Benchmarking</span>
                </li>
              </ul>

              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                href="#"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Pillar 3 */}
            <div className="service-card group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5">
              <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Landmark className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contabilidad y Finanzas
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Garantizamos la salud financiera de su organización con asesoría
                experta y análisis de riesgo meticuloso.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Asesoría Fiscal Integral</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Análisis de Riesgo Financiero</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Auditoría de Estados Contables</span>
                </li>
              </ul>

              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                href="#"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Pillar 4 */}
            <div className="service-card group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5 lg:col-start-1 lg:col-span-1 md:col-span-1">
              <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Economía Estratégica
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Analizamos el entorno macro y microeconómico para fundamentar
                proyectos de inversión de alto impacto.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Estudios Sectoriales Detallados</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Evaluación de Proyectos de Inversión</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="text-primary w-4 h-4 mt-1" />
                  <span>Análisis de Impacto Económico</span>
                </li>
              </ul>

              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                href="#"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Pillar 5 */}
            <div className="service-card group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5 lg:col-span-2 md:col-span-1">
              <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Terminal className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Sistemas e Información
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                La columna vertebral de la modernización: automatización de
                procesos y visualización de datos en tiempo real.
              </p>

              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                href="#"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            ¿Listo para transformar su organización con datos?
          </h2>

          <p className="text-lg mb-10 text-slate-100">
            Agende una consulta técnica gratuita con nuestros especialistas.
            Analizaremos sus necesidades específicas y propondremos una hoja de
            ruta personalizada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded shadow-lg hover:bg-slate-50 transition-colors uppercase tracking-wider text-sm"
              href="#"
            >
              Solicitar Consultoría Técnica
            </a>

            <a
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-sm"
              href="#"
            >
              Ver Folleto Corporativo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
