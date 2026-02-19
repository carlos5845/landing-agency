"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6">
      <h1 className="text-8xl font-bold tracking-tight text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-500 text-center max-w-md">
        La página que estás buscando no existe o fue movida.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl border border-gray-300 
        hover:bg-gray-900 hover:text-white transition-all duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
