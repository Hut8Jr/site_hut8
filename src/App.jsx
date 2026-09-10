import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import RouteMeta from "./components/RouteMeta.jsx";

import HomePage from "./pages/Home.jsx";

const ProjetosPage = lazy(() => import("./pages/Projetos.jsx"));
const ServicosPage = lazy(() => import("./pages/Servicos.jsx"));
const EquipePage = lazy(() => import("./pages/Equipe.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true">
      <div 
        aria-label="Carregando página" 
        className="w-10 h-10 border-4 border-purple-800 border-t-transparent rounded-full animate-spin" 
      />
    </div>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <RouteMeta />
      <Header setShowForm={setShowForm} />

      <main id="main-content" className="grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjetosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <WhatsAppButton showForm={showForm} setShowForm={setShowForm} />
      <Footer />
    </div>
  );
}

export default App;
