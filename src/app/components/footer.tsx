import { BarChart3, AtSign, MapPin, Phone, Mail, Globe } from "lucide-react";
export default function Footer() {
  return (
    <>
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
