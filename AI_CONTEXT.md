# CONTEXTO DE ARQUITETURA, SEO, PERFORMANCE E REGRAS DO PROJETO (SITE HUT 8 JR.)

> **PÚBLICO-ALVO DESTE DOCUMENTO:** Agentes de Inteligência Artificial (Claude, Codex, Gemini, GPT, Antigravity) e Desenvolvedores.
> **OBJETIVO:** Documentar integralmente a arquitetura técnica, as otimizações implementadas para atingir nota 10/10 na auditoria de produção, os padrões de engenharia adotados e as **invariantes invioláveis** que qualquer IA deve respeitar ao propor alterações neste repositório.

---

## 1. Visão Geral do Projeto e Identidade Institucional

- **Organização:** Hut 8 Jr. — Empresa Júnior dos Cursos de Ciência da Computação e Engenharia de Computação da Universidade Federal de Pelotas (UFPel).
- **Unidade Acadêmica:** Centro de Desenvolvimento Tecnológico (CDTec / UFPel).
- **Localização Física:** Rua Gomes Carneiro, 1 - Campus Porto, Pelotas - RS, Brasil (CEP 96010-610).
- **Coordenadas Geográficas:** Latitude `-31.7797`, Longitude `-52.3428`.
- **Domínio Principal de Produção:** `https://www.hut8.com.br` (com redirect 308 permanente e HSTS a partir de `https://hut8.com.br`).
- **Hospedagem:** Vercel Edge Network.
- **Repositório GitHub:** `https://github.com/Hut8Jr/site_hut8` (branch de produção: `main`).

---

## 2. Stack Tecnológica e Pipeline de Build

```
[React 19 + React Router 7] ──> [Vite 8 + Tailwind CSS v4] ──> [scripts/prerender.js (SSG)] ──> [dist/ (HTML Estático Otimizado)]
```

- **Frontend:** React 19 (`react`, `react-dom`), React Router v7 (`react-router-dom`), React Icons (`react-icons`).
- **Build Tool:** Vite 8 com `@vitejs/plugin-react` e `@tailwindcss/vite` (Tailwind CSS v4).
- **Motor SSG Customizado:** `scripts/prerender.js` (executado pós-build pelo Node.js).
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`) com execução em runner Ubuntu e deploy automático via integração Vercel GitHub App.

---

## 3. As Transformações Implementadas (Evolução de 5.0 para 10.0 / 10.0)

O projeto passou por 5 rodadas sucessivas de auditoria e refatoração técnica profunda, cobrindo 5 pilares estratégicos:

### Pilar I: SEO Técnico & SSG (Static Site Generation)
1. **SSG Prerender Engine (`scripts/prerender.js`):**
   - Elimina o problema de SPA vazio ("client-side only") para crawlers e motores de busca.
   - Gera arquivos HTML 100% estáticos para cada rota: `/index.html`, `/servicos/index.html`, `/projetos/index.html`, `/equipe/index.html` e `/404/index.html`.
   - Injeta metatags exclusivas, Open Graph, Twitter Cards, Canonical URLs absolutas e títulos específicos por rota.
2. **Arquitetura de Dados Estruturados (JSON-LD `@graph`):**
   - Em vez de microdados dispersos, utiliza um bloco unificado `@graph` com identificadores URI únicos (`#organization`, `#localbusiness`, `#website`, `#webpage`, `#breadcrumb`).
   - Declaração simultânea de:
     - `Organization` e `LocalBusiness`: Endereço no CDTec/UFPel, geolocalização exata, faixa de preço, catálogo de serviços e redes sociais.
     - `EducationalOrganization`: Vínculo semântico direto com a UFPel (`https://ufpel.edu.br`).
     - `WebSite` e `WebPage`: Mapeamento canônico, idioma `pt-BR` e breadcrumbs.
     - `BreadcrumbList`: Rastreamento hierárquico por rota.
   - **Regra de Isolamento do FAQPage:** O schema `FAQPage` só é injetado na rota raiz (`/`). Nas rotas internas (`/servicos`, `/projetos`, `/equipe`, `/404`), ele é filtrado dinamicamente para evitar penalidades de duplicidade de rich snippets pelo Google.
3. **Sitemap & Robots Dinâmicos:**
   - O `dist/sitemap.xml` é gerado programaticamente no prerender com a data real do build (`lastmod: YYYY-MM-DD`).
   - `dist/robots.txt` expõe o sitemap e concede permissão explícita para motores tradicionais e bots de IA.

---

### Pilar II: GEO (Generative Engine Optimization) & Descoberta por IA
1. **Arquivo `llms.txt` (`public/llms.txt` e `dist/llms.txt`):**
   - Formato padronizado consumido por agentes de busca de IA (Perplexity, ChatGPT Search, Claude, Google Gemini).
   - Estrutura em Markdown detalhando: Missão da empresa júnior, vínculo com CDTec/UFPel, catálogo completo de serviços (Web, Mobile, Sistemas, Consultoria), cases de sucesso (Toni Neutzling, Plante Saúde, Pastejando, Hut Admin) e dados institucionais de contato.
2. **Autorização Explícita de AI Crawlers no `robots.txt`:**
   - Permissão concedida explicitamente a `GPTBot`, `ClaudeBot`, `PerplexityBot` e `Google-Extended`.
3. **Relevância Semântica Local (Pelotas & RS):**
   - Presença dos termos geográficos e acadêmicos nos títulos, descrições, H1s e no corpo do texto prerenderizado.

---

### Pilar III: Performance Web & Core Web Vitals (LCP, CLS, INP)
1. **Substituição de Fontes Externas (Zero Dependência de Google Fonts CDN):**
   - As dependências externas `fonts.googleapis.com` e `fonts.gstatic.com` foram completamente removidas.
   - Foram adotadas **fontes variáveis locais modernas (WOFF2)**:
     - `Inter-Variable.woff2` (latin e latin-ext) para o corpo e textos gerais.
     - `PlusJakartaSans-Variable.woff2` (latin e latin-ext) para títulos e headings.
   - Apenas 4 arquivos WOFF2 cobrem todos os pesos de 100 a 900, substituindo dezenas de arquivos estáticos anteriores.
2. **Eliminação de Round-Trip Time (0 RTT para Fontes):**
   - As regras `@font-face` com `unicode-range` exato estão inlinadas diretamente no `<head>` do `index.html` via tag `<style id="critical-fonts">`. O navegador descobre as fontes antes mesmo de baixar a folha de estilo principal.
3. **Preload Crítico do Maior Elemento com Conteúdo (LCP):**
   - A imagem principal do Hero (`hero-graphic.webp`) possui `<link rel="preload" as="image" type="image/webp" fetchpriority="high">` no `<head>`.
4. **Conversão de Mídias para WebP:**
   - Imagens pesadas em PNG/JPEG foram otimizadas e convertidas para WebP, reduzindo o payload em mais de 70%.

---

### Pilar IV: Acessibilidade (WCAG 2.1 AA e 2.2 AA)
1. **Touch Targets (Alvos de Toque):**
   - Todos os elementos interativos, especialmente o botão de fechar modal em `Footer.jsx`, possuem dimensões mínimas em conformidade com a WCAG 2.2 SC 2.5.8 (`min-w-[32px] min-h-[32px]`, botões principais `>= 44x44px`).
2. **Hierarquia Semântica de Cabeçalhos:**
   - Cada página possui **exatamente um único `<h1>`** descritivo e sincronizado com a tag `<title>`.
   - As seções subsequentes utilizam `<h2>` e `<h3>` em ordem estritamente descendente sem saltos de nível.
3. **Acessibilidade para Leitores de Tela:**
   - `aria-label` e textos descritivos em todos os botões de ação e ícones (`Header.jsx`, `Footer.jsx`, `WhatsAppButton.jsx`).
   - Contraste de texto elevado em conformidade com o ratio mínimo de 4.5:1 (AA).

---

### Pilar V: Segurança HTTP e Infraestrutura Vercel Edge
1. **Content-Security-Policy (CSP) Rígido:**
   ```http
   default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; frame-src 'none';
   ```
   - Impede injeção XSS e ataques de clickjacking.
   - Proíbe scripts externos ou CDNs de terceiros não auditadas.
2. **HSTS Preload:**
   - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` forçando HTTPS por 2 anos.
3. **Políticas Adicionais:**
   - `X-Frame-Options: SAMEORIGIN`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
4. **Estratégia de Cache Vercel (`vercel.json`):**
   - Assets estáticos com hash (`/assets/*`): `Cache-Control: public, max-age=31536000, immutable`.
   - Páginas HTML estáticas: `Cache-Control: public, max-age=0, must-revalidate` (garante que novos deploys reflitam instantaneamente para os usuários).

---

## 4. Invariantes e Regras de Ouro para Agentes de IA

Qualquer IA que trabalhe neste repositório **DEVE OBEDECER** às seguintes regras:

1. **NUNCA Reintroduzir CDNs Externas de Fontes:**
   - Não adicione links para `fonts.googleapis.com` ou `fonts.gstatic.com`.
   - As fontes locais estão em `public/fonts/` e o CSS crítico está inlinado em `index.html`.
2. **NUNCA Violar a Content-Security-Policy:**
   - Se for adicionar qualquer biblioteca, certifique-se de que ela não depende de `eval()` ou scripts hospedados remotamente sem atualizar explicitamente o `vercel.json`.
3. **NUNCA Modificar o Design Visual ou Menus sem Ordem Expressa do Usuário:**
   - Respeite o layout visual existente. O usuário preza pela fidelidade ao design original.
4. **SEMPRE Manter as Rotas Prerenderizadas Atualizadas:**
   - Ao adicionar ou renomear rotas, atualize o objeto `routes` em `scripts/prerender.js` para garantir que o SSG gere o arquivo HTML correspondente.
5. **Cuidado com Dependências Multiplataforma no CI (Linux vs Windows):**
   - O projeto utiliza bibliotecas que dependem de bindings nativos (ex: `sharp`). No `package.json`, as dependências `@emnapi/core` e `@emnapi/runtime` devem permanecer registradas para evitar quebras em `npm ci` no ambiente Ubuntu do GitHub Actions.
6. **SEMPRE Rodar o Build e Validar Antes de Submeter Código:**
   - O comando `npm run build` executa o Vite e em seguida `node scripts/prerender.js`.
   - Ambos devem terminar com código de saída 0.

---

## 5. Estrutura Crítica de Arquivos

```text
site_hut8/
├── .github/workflows/ci.yml       # Pipeline de CI que valida eslint e build
├── public/
│   ├── fonts/                     # 4 arquivos WOFF2 de fontes variáveis locais
│   ├── llms.txt                   # Documentação estruturada para motores de IA (GEO)
│   ├── robots.txt                 # Políticas de crawl para Google, Bing e IAs
│   └── sitemap.xml                # Template base do sitemap
├── scripts/
│   ├── prerender.js               # Gerador estático SSG das 4 rotas + 404 + schemas
│   └── convert-to-webp.js         # Script utilitário para otimização de imagens
├── src/
│   ├── components/                # Header, Footer, WhatsAppButton, SEO (React Helmet)
│   ├── sections/                  # Páginas divididas por seções semânticas
│   ├── App.jsx                    # Rotas do React Router v7
│   └── index.css                  # Tailwind v4 import e regras globais
├── index.html                     # Shell principal com CSS crítico inlinado e LCP preload
├── vercel.json                    # Headers de segurança, cache imutável e roteamento
└── package.json                   # Scripts de build e dependências travadas
```

---

## 6. Procedimento para Novos Deploys

1. Execute `npm run lint` para garantir conformidade com as regras do ESLint.
2. Execute `npm run build` para compilar o bundle e gerar todas as rotas estáticas via SSG.
3. Crie os commits e envie via PR ou diretamente na branch `main` (conforme alinhamento do usuário).
4. O GitHub Actions executará a validação do build. Uma vez verde, a Vercel executará o deploy de produção automaticamente em [https://www.hut8.com.br](https://www.hut8.com.br).
