"use client";

import Image from "next/image";
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

export default function SectorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <nav className="flex mb-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <a className="hover:text-primary" href="#">
                Inicio
              </a>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-primary">Sectores y Aplicaciones</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Experiencia en <span className="text-primary">cada sector.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
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
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8">
            ¿Listo para transformar tu sector?
          </h2>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Nuestro enfoque multidisciplinario garantiza resultados sin importar
            tu industria.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Agendar Consultoría
            </button>

            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Descargar PDF de Servicios
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Components */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SectionBlock({id,badge,title,description,  image,children,reverse,}: any) {
  return (
    <section
      className="py-24 border-t border-slate-100 dark:border-slate-800"
      id={id}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}
        >
          <div className="w-full lg:w-1/3 lg:sticky top-32">
            <div className="text-primary font-bold uppercase text-xs mb-4">
              {badge}
            </div>
            <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              {description}
            </p>

            <div className="rounded-2xl overflow-hidden relative aspect-video lg:aspect-square">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card({ icon, title, text }: any) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all hover:shadow-xl group">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400">{text}</p>
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AcademicCard({ number, title, text }: any) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-start gap-6 hover:shadow-lg transition-all group border-l-4 border-l-primary">
      <div className="hidden sm:flex shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-full items-center justify-center text-3xl font-bold italic">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400">{text}</p>
      </div>
    </div>
  );
}
