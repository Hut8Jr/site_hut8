import fs from "fs";
import path from "path";
import process from "node:process";

const DIST_DIR = path.resolve("dist");
const BASE_URL = (process.env.VITE_SITE_URL || "https://hut8.com.br").replace(/\/$/, "");

const ROUTES = [
  {
    path: "/",
    outDir: DIST_DIR,
    outFile: path.join(DIST_DIR, "index.html"),
    title: "Hut 8 Jr. | Empresa Júnior de Computação - UFPel",
    description: "Hut 8 Jr. é a Empresa Júnior de Computação da UFPel. Desenvolvemos sites, aplicativos mobile e sistemas sob medida com excelência técnica em Pelotas e região.",
    canonical: `${BASE_URL}/`,
    robots: "index, follow",
    breadcrumb: [
      { name: "Início", url: `${BASE_URL}/` },
    ],
    structuredData: null,
    semanticContent: `
      <header>
        <h1>Empresa Júnior de Computação - UFPel</h1>
      </header>
      <main>
        <section>
          <h2>Soluções Digitais de Alto Impacto Desenvolvidas na UFPel</h2>
          <p>A Hut 8 Jr. é a Empresa Júnior de Computação da Universidade Federal de Pelotas. Desenvolvemos plataformas web modernas, aplicativos mobile e soluções sob medida com excelência técnica e rigor acadêmico para empresas de Pelotas, Rio Grande do Sul e todo o Brasil.</p>
        </section>
        <section>
          <h2>Nossos Serviços Especializados</h2>
          <ul>
            <li><strong>Plataformas Web:</strong> Sites rápidos, responsivos e otimizados para SEO e conversão.</li>
            <li><strong>Aplicativos Mobile:</strong> Apps modernos para Android e iOS.</li>
            <li><strong>Soluções Personalizadas:</strong> Engenharia de software e automação empresarial sob medida.</li>
          </ul>
        </section>
        <section>
          <h2>Portfólio de Cases de Sucesso</h2>
          <p>Projetos reais entregues para o agronegócio, mercado imobiliário e cooperativas regionais.</p>
        </section>
        <section>
          <h2>Mentoria Acadêmica e Inovação</h2>
          <p>Soluções conduzidas por estudantes dos cursos de Ciência e Engenharia da Computação com orientação de professores doutores do CDTec/UFPel.</p>
        </section>
      </main>
    `,
  },
  {
    path: "/servicos",
    outDir: path.join(DIST_DIR, "servicos"),
    outFile: path.join(DIST_DIR, "servicos", "index.html"),
    title: "Serviços de Tecnologia e Software | Hut 8 Jr. - UFPel",
    description: "Desenvolvimento web moderno, aplicativos mobile nativos e híbridos, sistemas personalizados e consultoria técnica pela Empresa Júnior da UFPel.",
    canonical: `${BASE_URL}/servicos`,
    robots: "index, follow",
    breadcrumb: [
      { name: "Início", url: `${BASE_URL}/` },
      { name: "Serviços", url: `${BASE_URL}/servicos` },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Serviços da Hut 8 Jr.",
      "description": "Lista de serviços de tecnologia oferecidos pela Hut 8 Jr. da UFPel.",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Desenvolvimento de Plataformas Web",
          "description": "Sistemas web e landing pages modernas, responsivas e de alta performance.",
          "provider": { "@type": "Organization", "name": "Hut 8 Jr." },
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Desenvolvimento de Aplicativos Mobile",
          "description": "Aplicativos para Android e iOS intuitivos e escaláveis.",
          "provider": { "@type": "Organization", "name": "Hut 8 Jr." },
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Soluções em Software Personalizadas",
          "description": "Engenharia de software sob medida para automação e gestão empresarial.",
          "provider": { "@type": "Organization", "name": "Hut 8 Jr." },
        },
      ],
    },
    semanticContent: `
      <header><h1>Serviços Especializados em Tecnologia e Software</h1></header>
      <main>
        <p>A Hut 8 Jr. é a Empresa Júnior de Computação da Universidade Federal de Pelotas (UFPel). Oferecemos desenvolvimento web, aplicativos móveis e sistemas sob medida com qualidade de nível profissional e preço acessível para empresas de Pelotas, Rio Grande do Sul e todo o Brasil.</p>
        <h2>Nossas Especialidades em Detalhes</h2>
        <section>
          <h3>Plataformas Web</h3>
          <p>Criamos sites e sistemas web rápidos, modernos e preparados para gerar resultados reais com React, Tailwind e cloud computing.</p>
        </section>
        <section>
          <h3>Aplicativos Mobile</h3>
          <p>Desenvolvimento ágil e intuitivo de aplicativos mobile nativos e híbridos para expandir sua operação no bolso dos seus clientes.</p>
        </section>
        <section>
          <h3>Soluções Personalizadas</h3>
          <p>Desenvolvimento sob medida para resolver gargalos operacionais específicos com arquitetura escalável e banco de dados otimizado.</p>
        </section>
      </main>
    `,
  },
  {
    path: "/projetos",
    outDir: path.join(DIST_DIR, "projetos"),
    outFile: path.join(DIST_DIR, "projetos", "index.html"),
    title: "Portfólio de Projetos e Cases de Sucesso | Hut 8 Jr. - UFPel",
    description: "Conheça os projetos entregues pela Hut 8 Jr.: sistemas agroindustriais, aplicativos mobile, plataformas inteligentes e produtos de alta tecnologia.",
    canonical: `${BASE_URL}/projetos`,
    robots: "index, follow",
    breadcrumb: [
      { name: "Início", url: `${BASE_URL}/` },
      { name: "Projetos", url: `${BASE_URL}/projetos` },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Portfólio de Projetos da Hut 8 Jr.",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "Pastejando",
          "description": "Plataforma de gestão inteligente para o agronegócio e pecuária de precisão.",
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Hut Admin",
          "description": "Sistema integrado de gestão operacional, financeiro e de recursos humanos.",
        },
        {
          "@type": "CreativeWork",
          "position": 3,
          "name": "Plante Saúde",
          "description": "Solução inovadora conectando produtores e compradores de produtos agroecológicos.",
        },
        {
          "@type": "CreativeWork",
          "position": 4,
          "name": "Toni Neutzling Imóveis",
          "description": "Plataforma imobiliária com busca georreferenciada e filtros avançados em Pelotas.",
        },
      ],
    },
    semanticContent: `
      <header><h1>Portfólio de Projetos e Soluções Tecnológicas</h1></header>
      <main>
        <p>Casos de sucesso reais entregues pela Hut 8 Jr. para clientes em Pelotas e em todo o Brasil.</p>
        <section>
          <h2>Pastejando</h2>
          <p>Plataforma para pecuária de precisão com monitoramento de pastejo rotacionado e métricas zootécnicas.</p>
        </section>
        <section>
          <h2>Hut Admin</h2>
          <p>Painel administrativo moderno com controle de fluxo financeiro, projetos e métricas de desempenho de equipes.</p>
        </section>
        <section>
          <h2>Plante Saúde</h2>
          <p>Sistema digital de rastreabilidade de hortifrúti conectando produtores rurais e cooperativas agroecológicas.</p>
        </section>
        <section>
          <h2>Toni Neutzling Imóveis</h2>
          <p>Portal web imobiliário com catálogo dinâmico de imóveis para locação e venda em Pelotas e região.</p>
        </section>
      </main>
    `,
  },
  {
    path: "/equipe",
    outDir: path.join(DIST_DIR, "equipe"),
    outFile: path.join(DIST_DIR, "equipe", "index.html"),
    title: "Nossa Equipe e Professores Orientadores | Hut 8 Jr. - UFPel",
    description: "Conheça os jovens talentos universitários e professores doutores da UFPel que lideram e orientam as soluções inovadoras da Hut 8 Jr.",
    canonical: `${BASE_URL}/equipe`,
    robots: "index, follow",
    breadcrumb: [
      { name: "Início", url: `${BASE_URL}/` },
      { name: "Nossa Equipe", url: `${BASE_URL}/equipe` },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nossa Equipe",
          "item": `${BASE_URL}/equipe`,
        },
      ],
    },
    semanticContent: `
      <header><h1>Nossa Equipe e Professores Orientadores - UFPel</h1></header>
      <main>
        <p>Talentos universitários dos cursos de Ciência da Computação e Engenharia da Computação da Universidade Federal de Pelotas, sob mentoria de professores doutores do Centro de Desenvolvimento Tecnológico (CDTec/UFPel).</p>
        <section>
          <h2>Orientação Acadêmica</h2>
          <p>Prof. Dr. Tobias Mulling e Profa. Dra. Larissa Astrogildo garantem rigor metodológico e inovação em cada projeto.</p>
        </section>
        <section>
          <h2>Diretoria Executiva</h2>
          <p>Liderança estudantil responsável pela gestão estratégica, comercial e operacional da empresa júnior.</p>
        </section>
        <section>
          <h2>Desenvolvedores & Designers</h2>
          <p>Equipe multidisciplinar com expertise em React, Node.js, Python, TypeScript, Figma e arquitetura em nuvem.</p>
        </section>
      </main>
    `,
  },
  {
    path: "/404",
    outDir: DIST_DIR,
    outFile: path.join(DIST_DIR, "404.html"),
    title: "Página Não Encontrada (404) | Hut 8 Jr. - UFPel",
    description: "Página não encontrada no site oficial da Hut 8 Jr. - Empresa Júnior de Computação da UFPel.",
    canonical: `${BASE_URL}/`,
    robots: "noindex, nofollow",
    breadcrumb: [],
    structuredData: null,
    semanticContent: `
      <header><h1>404 - Página Não Encontrada</h1></header>
      <main style="font-family: sans-serif; text-align: center; padding: 60px 20px;">
        <p style="color: #4B5563; margin: 20px 0;">O link que você tentou acessar não existe ou foi alterado.</p>
        <a href="/" style="display: inline-block; background-color: #6B0F9C; color: #FFFFFF; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold;">Voltar para o Início</a>
      </main>
    `,
  },
];

function generateBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": b.url,
    })),
  };
}

function prerender() {
  const indexHtmlPath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf8");

  for (const route of ROUTES) {
    if (!fs.existsSync(route.outDir)) {
      fs.mkdirSync(route.outDir, { recursive: true });
    }

    let html = baseHtml;

    // 1. Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Meta description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}">`
    );

    // 3. Robots
    if (html.includes('name="robots"')) {
      html = html.replace(
        /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="robots" content="${route.robots}">`
      );
    } else {
      html = html.replace(
        "</head>",
        `  <meta name="robots" content="${route.robots}">\n</head>`
      );
    }

    // 4. Canonical & Hreflang
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}">`
    );
    html = html.replace(
      /<link\s+rel=["']alternate["']\s+hreflang=["']pt-BR["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="alternate" hreflang="pt-BR" href="${route.canonical}">`
    );
    html = html.replace(
      /<link\s+rel=["']alternate["']\s+hreflang=["']x-default["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="alternate" hreflang="x-default" href="${route.canonical}">`
    );

    // 5. OpenGraph & Twitter
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:title" content="${route.title}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:description" content="${route.description}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}">`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}">`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}">`
    );

    // Dynamic BASE_URL replacement in base schema and meta tags if non-default
    if (BASE_URL !== "https://hut8.com.br") {
      html = html.replaceAll("https://hut8.com.br", BASE_URL);
    }

    // 5.1 Filter FAQPage from base schema on non-home routes (prevent duplicate FAQ entity claims)
    if (route.path !== "/") {
      const baseSchemaRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/;
      const match = html.match(baseSchemaRegex);
      if (match) {
        try {
          const json = JSON.parse(match[1]);
          if (json["@graph"]) {
            json["@graph"] = json["@graph"].filter((item) => item["@type"] !== "FAQPage");
            html = html.replace(
              match[0],
              `<script type="application/ld+json">\n    ${JSON.stringify(json, null, 2).replace(/\n/g, "\n    ")}\n    </script>`
            );
          }
        } catch (e) {
          console.warn("Could not filter FAQPage schema:", e);
        }
      }
    }

    // 6. Preload LCP hero image on homepage
    if (route.path === "/") {
      try {
        const assetsDir = path.join(DIST_DIR, "assets");
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          const heroAsset = files.find((f) => f.startsWith("estudantes-") && f.endsWith(".webp"));
          if (heroAsset) {
            html = html.replace(
              "</head>",
              `  <link rel="preload" as="image" href="/assets/${heroAsset}" fetchpriority="high" type="image/webp">\n</head>`
            );
          }
        }
      } catch (err) {
        console.warn("Could not preload hero image:", err);
      }
    }

    // 7. Structured data scripts
    const schemasToInject = [];
    const breadcrumbSchema = generateBreadcrumbSchema(route.breadcrumb);
    if (breadcrumbSchema) {
      schemasToInject.push(breadcrumbSchema);
    }
    if (route.structuredData && route.structuredData["@type"] !== "BreadcrumbList") {
      schemasToInject.push(route.structuredData);
    }

    if (schemasToInject.length > 0) {
      const combinedSchema = schemasToInject.length === 1 ? schemasToInject[0] : {
        "@context": "https://schema.org",
        "@graph": schemasToInject.map((s) => {
          const { "@context": _, ...rest } = s;
          return rest;
        }),
      };

      const scriptTag = `\n    <script id="route-schema" type="application/ld+json">\n    ${JSON.stringify(combinedSchema, null, 2).replace(/\n/g, "\n    ")}\n    </script>`;
      html = html.replace("</head>", `${scriptTag}\n</head>`);
    }

    // 8. Inject crawler-accessible semantic content inside <div id="root">
    if (route.semanticContent) {
      html = html.replace(
        /<div\s+id=["']root["']>[\s\S]*?<\/div>/i,
        `<div id="root">\n${route.semanticContent}\n</div>`
      );
    }

    fs.writeFileSync(route.outFile, html, "utf8");
    console.log(`✓ Prerendered static HTML for ${route.path} -> ${path.relative(DIST_DIR, route.outFile)}`);
  }

  // Generate dynamic sitemap.xml with BASE_URL and build date
  const today = new Date().toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/servicos</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/projetos</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/equipe</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
`;
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf8");
  console.log(`✓ Generated dynamic dist/sitemap.xml with base URL ${BASE_URL} and lastmod ${today}`);

  // Update dist/robots.txt and dist/llms.txt dynamically
  const robotsPath = path.join(DIST_DIR, "robots.txt");
  if (fs.existsSync(robotsPath)) {
    let robotsContent = fs.readFileSync(robotsPath, "utf8");
    robotsContent = robotsContent.replaceAll("https://hut8.com.br", BASE_URL);
    fs.writeFileSync(robotsPath, robotsContent, "utf8");
    console.log(`✓ Updated dist/robots.txt with base URL ${BASE_URL}`);
  }

  const llmsPath = path.join(DIST_DIR, "llms.txt");
  if (fs.existsSync(llmsPath)) {
    let llmsContent = fs.readFileSync(llmsPath, "utf8");
    llmsContent = llmsContent.replaceAll("https://hut8.com.br", BASE_URL);
    fs.writeFileSync(llmsPath, llmsContent, "utf8");
    console.log(`✓ Updated dist/llms.txt with base URL ${BASE_URL}`);
  }

  console.log("Static HTML prerendering completed successfully.");
}

prerender();
