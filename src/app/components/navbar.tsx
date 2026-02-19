export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-black uppercase">
              <span className="text-black italic">STATCONT</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-black">
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Inicio
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#metodologia"
            >
              Metodología
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
          <div>
            <a
              className="bg-blue-400 hover:bg-primary/90 text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-primary/20"
              href="#contacto"
            >
              Agendar Consultoría
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
