import { CONTACT_INFO } from "./contactConfig";

export const footerLinks = {
  redesSocias: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/hutEight",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hut8_jr/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/hut8/",
    },
  ],

  linksRapidos: [
    {
      name: "Home",
      secao: "home",
    },
    {
      name: "Projetos",
      secao: "projetos",
    },
    {
      name: "Serviços",
      secao: "servicos",
    },
    {
      name: "Nossa Equipe",
      secao: "equipe",
    },
  ],

  servicos: [
    {
      name: "Plataformas Web",
      targetId: "plataformasWeb",
    },
    {
      name: "Aplicativos Mobile",
      targetId: "aplicativosMobile",
    },
    {
      name: "Soluções Personalizadas",
      targetId: "solucoesPersonalizadas",
    },
  ],

  contato: [
    {
      name: CONTACT_INFO.address,
      url: CONTACT_INFO.mapsUrl,
    },
    {
      name: CONTACT_INFO.email,
      url: `mailto:${CONTACT_INFO.email}`,
    },
    {
      name: CONTACT_INFO.phoneFormatted,
      url: CONTACT_INFO.phoneTel,
    },
  ],
};
