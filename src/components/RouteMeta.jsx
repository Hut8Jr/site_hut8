import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://hut8.com.br").replace(/\/$/, "");

const ROUTE_METADATA = {
  "/": {
    title: "Hut 8 Jr. | Empresa Júnior de Computação - UFPel",
    description: "Hut 8 Jr. é a Empresa Júnior de Computação da UFPel. Desenvolvemos sites, aplicativos mobile e sistemas sob medida com excelência técnica em Pelotas e região.",
    canonical: `${SITE_URL}/`,
    robots: "index, follow",
  },
  "/servicos": {
    title: "Serviços de Tecnologia e Software | Hut 8 Jr. - UFPel",
    description: "Desenvolvimento web moderno, aplicativos mobile nativos e híbridos, sistemas personalizados e consultoria técnica pela Empresa Júnior da UFPel.",
    canonical: `${SITE_URL}/servicos`,
    robots: "index, follow",
  },
  "/projetos": {
    title: "Portfólio de Projetos e Cases de Sucesso | Hut 8 Jr. - UFPel",
    description: "Conheça os projetos entregues pela Hut 8 Jr.: sistemas agroindustriais, aplicativos mobile, plataformas inteligentes e produtos de alta tecnologia.",
    canonical: `${SITE_URL}/projetos`,
    robots: "index, follow",
  },
  "/equipe": {
    title: "Nossa Equipe e Professores Orientadores | Hut 8 Jr. - UFPel",
    description: "Conheça os jovens talentos universitários e professores doutores da UFPel que lideram e orientam as soluções inovadoras da Hut 8 Jr.",
    canonical: `${SITE_URL}/equipe`,
    robots: "index, follow",
  },
};

const ROUTE_SCHEMAS = {
  "/": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    ],
  },
  "/servicos": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
    ],
  },
  "/projetos": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Projetos", item: `${SITE_URL}/projetos` },
    ],
  },
  "/equipe": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Nossa Equipe", item: `${SITE_URL}/equipe` },
    ],
  },
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isKnownRoute = Boolean(ROUTE_METADATA[pathname]);
    const meta = isKnownRoute ? ROUTE_METADATA[pathname] : {
      title: "Página Não Encontrada | Hut 8 Jr.",
      description: "Página não encontrada no site oficial da Hut 8 Jr. - Empresa Júnior de Computação da UFPel.",
      canonical: `${SITE_URL}/`,
      robots: "noindex, nofollow",
    };

    // Atualiza title
    document.title = meta.title;

    // Atualiza meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", meta.description);

    // Atualiza robots (evita soft-404 indexado pelo Google)
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", meta.robots);

    // Atualiza canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", meta.canonical);

    // Atualiza hreflang
    const hreflangPt = document.querySelector('link[rel="alternate"][hreflang="pt-BR"]');
    if (hreflangPt) hreflangPt.setAttribute("href", meta.canonical);

    const hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (hreflangDefault) hreflangDefault.setAttribute("href", meta.canonical);

    // Atualiza OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", meta.canonical);

    // Atualiza JSON-LD da rota (BreadcrumbList)
    let routeSchemaTag = document.getElementById("route-schema");
    if (ROUTE_SCHEMAS[pathname]) {
      if (!routeSchemaTag) {
        routeSchemaTag = document.createElement("script");
        routeSchemaTag.id = "route-schema";
        routeSchemaTag.type = "application/ld+json";
        document.head.appendChild(routeSchemaTag);
      }
      routeSchemaTag.textContent = JSON.stringify(ROUTE_SCHEMAS[pathname]);
    } else if (routeSchemaTag) {
      routeSchemaTag.remove();
    }
  }, [pathname]);

  return null;
}
