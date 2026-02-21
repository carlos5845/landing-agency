"use client";

import Image from "next/image";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  return (
    <>
      {/* Main Content Section */}
      <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center p-6 md:p-12">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyHd0m_38rrW3uPiz3wuI_KW1WbGlTzxvZ1AvAuyrlf97yKrxco08z_IATONJHqXO54hDMv4Ta90Q8cEjfoM4Dl3fsY5K_VmAfF3zEL01MgGBZdgSvIKB6eLLyw5Oa1EtKD_pKk2SgrzGNu2qCJOUkcn63552iRtHF7qgg8KiEarmKa69TnrkeERUERiEfgMGKj0YAYez6pxScK5KW48YiVx0ZMxGRFWH1jRnEJkAxlKVz2SUwlREgpJIiRiCqP6Ch7T9yJPoLt8"
            alt="Mapa del Mundo"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-6xl w-full z-10">
          <div className="grid lg:grid-cols-12 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* IZQUIERDA - FORMULARIO */}
            <div className="lg:col-span-7 p-8 md:p-12">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Contacta a Nuestros Consultores
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                  ¿Listo para transformar tu negocio con datos? Nuestros
                  expertos están aquí para ayudarte en tu transformación
                  digital.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Nombre Completo" placeholder="Juan Pérez" />
                  <Input
                    label="Nombre de la Empresa"
                    placeholder="Empresa SAC"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Servicio de Interés
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option>Analítica y Visualización de Datos</option>
                    <option>Transformación Estratégica Empresarial</option>
                    <option>Integración Cloud y Tecnología</option>
                    <option>Soluciones de IA y Machine Learning</option>
                    <option>Evaluación de Riesgo Financiero</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Tu Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto o desafío..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* DERECHA - INFORMACIÓN */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8">Ponte en Contacto</h2>

                <div className="space-y-8">
                  <InfoBlock
                    icon={<Mail />}
                    title="Escríbenos"
                    text="Nuestro equipo está listo para ayudarte."
                    link="mailto:hello@datacore.agency"
                    linkText="hello@datacore.agency"
                  />

                  <InfoBlock
                    icon={<Phone />}
                    title="Llámanos o WhatsApp"
                    text="Lunes a Viernes de 9am a 6pm."
                    link="tel:+15550000000"
                    linkText="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Ubicaciones + Redes */}
              <div className="mt-12 space-y-6">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Nuestras Ubicaciones
                  </h4>

                  <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    <p className="text-sm font-medium">
                      Nueva York • Londres • Singapur
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Sigue Nuestros Insights
                  </h4>

                  <div className="flex gap-4">
                    <Social icon={<Linkedin />} />
                    <Social icon={<Twitter />} />
                    <Social icon={<Instagram />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sección del Mapa */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 relative group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCywg66L1l-zYY_cMJe1eZCPPmtf_VTvbf3vvOv0ZWF5Y6Vosfum-3PTMwju9xWozxcpnTLhK2Bw1ZqdMbFHehz2I6pZiJhqhiecG5pRqoa_6Ao3BtkpaxUpwXBS_146in4V6Xz0a-j-Jro66wawPyEffa8w7rDywhjmQ-L75ewMDT8ipL25VRzSS6MpOWL0esRxodmFNqvTCzLAaNaBHLQrbcyT0AryYOH-yPUlAhxnQizVr09_UL_W7F7Qf3LBXIKWri2ozsRll8"
            alt="Sede Global"
            fill
            className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-1">Sede Global</h3>
              <p className="text-white/80">
                One World Trade Center, Suite 85, Nueva York, NY
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Oficina Abierta
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Components */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Input({ label, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function InfoBlock({ icon, title, text, link, linkText }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="text-slate-500 dark:text-slate-400 mb-1">{text}</p>
        <a href={link} className="text-primary font-medium hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Social({ icon }: any) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}
