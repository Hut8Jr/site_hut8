import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-[#F9FAFB]">
      <div className="max-w-md w-full text-center">
        <span className="text-[#6B0F9C] font-extrabold text-7xl sm:text-8xl tracking-tight">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
          404 - Página Não Encontrada
        </h1>
        <p className="text-gray-600 mt-3 text-base">
          O link que você tentou acessar não existe ou foi movido. Explore nossos serviços ou retorne à página inicial.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#6B0F9C] text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-900 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors shadow-lg shadow-purple-800/25"
          >
            Voltar para a Home
          </Link>
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors"
          >
            Ver Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
