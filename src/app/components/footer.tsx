import Link from "next/link";
import {
  BarChart3,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer
        className="relative bg-slate-900 dark:bg-background-dark pt-20 text-slate-400 overflow-hidden"
        id="contacto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo + descripción */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white uppercase">
                  STATCONT
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-8">
                Líderes en consultoría estratégica basada en ciencia de datos.
                Impulsamos el futuro de las empresas inteligentes.
              </p>

              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  href="https://web.facebook.com/profile.php?id=61585577921876"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all tooltip"
                  href="https://wa.me/907930586"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp 1"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all tooltip"
                  href="https://wa.me/944823275"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp 2"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-white font-bold mb-8">Servicios</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/servicios/inteligencia-analisis"
                    className="hover:text-primary transition-colors"
                  >
                    Inteligencia y Análisis de Datos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-economica-financiera"
                    className="hover:text-primary transition-colors"
                  >
                    Evaluación Económica y Financiera
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/tecnologia-sistemas"
                    className="hover:text-primary transition-colors"
                  >
                    Tecnología y Sistemas de Información
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compañía */}
            <div>
              <h4 className="text-white font-bold mb-8">Compañía</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nosotros"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectores"
                    className="hover:text-primary transition-colors"
                  >
                    Sectores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/metodologia"
                    className="hover:text-primary transition-colors"
                  >
                    Metodología
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white font-bold mb-8">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span>Puno - Perú</span>
                </li>

                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-primary mt-1" />
                  <div className="flex flex-col">
                    <span>+51 907 930 586</span>
                    <span>+51 944 823 275</span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Mail className="w-4 h-4 text-primary mt-1" />
                  <span>hello@statcont.agency</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom bar 
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium z-10 relative">
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
          */}

          <div className="mt-20 pt-8 border-t border-slate-800 flex justify-center text-[#7abfe6]">
            <span className="font-black text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[22rem] leading-none tracking-tighter uppercase select-none opacity-20">
              STATCONT
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
