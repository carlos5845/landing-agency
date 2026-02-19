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
  BarChart3,
  AtSign,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Seccion() {
  return (
    <>
      <section className="py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              <Image
                alt="Team Meeting"
                className="rounded-2xl shadow-2xl relative z-10"
                data-alt="Professional consultants meeting around a conference table"
                src="/agency-hero.png"
                fill
              />
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-white font-bold text-4xl mb-1">15+</p>
                <p className="text-primary-foreground/80 text-white/80 text-sm font-medium">
                  Años de experiencia
                  <br />
                  en el mercado global
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                Excelencia técnica para un mundo complejo
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                En DataForge, entendemos que los datos por sí solos son solo
                ruido. Nuestra misión es procesar esa información a través de un
                lente multidisciplinario para revelar oportunidades estratégicas
                que otros pasan por alto.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Combinamos el rigor de la academia con la agilidad del mundo
                corporativo, asegurando que cada recomendación esté respaldada
                por modelos matemáticos sólidos y un profundo conocimiento del
                entorno económico.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div>
                  <p className="text-primary font-bold text-2xl mb-1">98%</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Precisión en proyecciones
                  </p>
                </div>
                <div>
                  <p className="text-primary font-bold text-2xl mb-1">250+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Proyectos ejecutados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-24 bg-background-light dark:bg-background-dark data-grid-bg"
        id="servicios"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Nuestras Soluciones
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Áreas de Especialización
            </h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Estadística */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Sigma className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Estadística
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Modelado predictivo y análisis de probabilidad avanzado.
              </p>
            </div>

            {/* Mercado */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Mercado
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Investigación profunda del consumidor y tendencias.
              </p>
            </div>

            {/* Finanzas */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Landmark className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Finanzas
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Valuación de activos y gestión de riesgos financieros.
              </p>
            </div>

            {/* Economía */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Globe className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Economía
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Análisis macroeconómico y consultoría de políticas.
              </p>
            </div>

            {/* Sistemas */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Server className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Sistemas
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Arquitectura de datos e infraestructura digital.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-24 bg-white dark:bg-background-dark"
        id="metodologia"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Texto izquierdo */}
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                Por qué confiar en nuestra metodología
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                No solo entregamos reportes; construimos marcos de decisión
                robustos que evolucionan con su negocio.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">
                    Transparencia Algorítmica
                  </span>
                </div>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Soporte Continuo</span>
                </div>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Ética de Datos</span>
                </div>
              </div>
            </div>

            {/* Cards derecha */}
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
              {/* Rigor Científico */}
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <Microscope className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  Rigor Científico
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Validación exhaustiva bajo estándares internacionales de
                  investigación.
                </p>
              </div>

              {/* Enfoque Integral */}
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <Users className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  Enfoque Integral
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Expertos de diversas áreas colaborando en una única solución
                  coherente.
                </p>
              </div>

              {/* Innovación */}
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <Lightbulb className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  Innovación
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Implementación de IA y Machine Learning de última generación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-12 lg:p-20 relative overflow-hidden text-center lg:text-left">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <Image
                alt="Abstract Pattern"
                className="w-full h-full object-cover"
                data-alt="Modern blue and white abstract geometric pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8xZ1py6rj2IhkCnHpvEXom_COJ4BuLL_cE-CzVdJW79qZ0B39sUcZF356AusPllfL24Vq-O3pssyWpDhf9Yn6oZg-yQd8kE80hwxWfQawH0CrMAw1kXbudPUhUwIU4L2xbUOyMD4j5TNZkLAAkU0Kl8wbAqy-laNFFI98PhTtfFM5OvGu8LIv1JmyD-vNp48WA6INUOMV6RwXwXVNXt5-JzEH7mtBzyHT_cPozPY1qhDeYyPdOVUlBY_9wL5lwTNVgY7kzOE-l98"
                fill
              />
            </div>
            <div className="relative z-10 lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                  ¿Listo para transformar su estrategia empresarial?
                </h2>
                <p className="text-white/80 text-xl max-w-xl">
                  Hablemos sobre cómo nuestras soluciones analíticas pueden
                  impulsar sus resultados.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">
                  Agendar Llamada
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="bg-slate-900 dark:bg-background-dark pt-20 pb-10 text-slate-400"
        id="contacto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo + descripción */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white uppercase">
                  Data<span className="text-primary italic">Forge</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-8">
                Líderes en consultoría estratégica basada en ciencia de datos.
                Impulsamos el futuro de las empresas inteligentes.
              </p>

              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <Globe className="w-5 h-5" />
                </a>

                <a
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <AtSign className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-white font-bold mb-8">Servicios</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Análisis Predictivo
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Big Data Strategy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Due Diligence Financiero
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Estudios de Segmentación
                  </a>
                </li>
              </ul>
            </div>

            {/* Compañía */}
            <div>
              <h4 className="text-white font-bold mb-8">Compañía</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Metodología
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Carreras
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white font-bold mb-8">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span>
                    Av. de la Reforma 1240, Piso 18
                    <br />
                    Ciudad de México, CP 01210
                  </span>
                </li>

                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-primary mt-1" />
                  <span>+52 (55) 4893 2100</span>
                </li>

                <li className="flex gap-3">
                  <Mail className="w-4 h-4 text-primary mt-1" />
                  <span>contacto@dataforge.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>
              © 2024 DataForge Consulting Group. Todos los derechos reservados.
            </p>

            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">
                Política de Privacidad
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Términos de Servicio
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
