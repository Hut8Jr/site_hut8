// Configuração centralizada de contatos da Hut 8 Jr.

export const CONTACT_INFO = {
  phoneRaw: "5551997467149",
  phoneFormatted: "(51) 99746-7149",
  phoneTel: "tel:+5551997467149",
  email: "hut8@inf.ufpel.edu.br",
  address: "Rua Gomes Carneiro, 1 - Campus Porto, UFPel, Pelotas - RS, Brasil",
  postalCode: "96010-610",
  mapsUrl: "https://maps.app.goo.gl/j3MCur9rDnQKs9g56",
};

/**
 * Gera URL segura para a API do WhatsApp garantindo encode de todos os parâmetros.
 * @param {string} [message=""] Mensagem inicial opcional
 * @returns {string} URL devidamente codificada
 */
export const getWhatsAppLink = (message = "") => {
  const params = new URLSearchParams();
  params.set("phone", CONTACT_INFO.phoneRaw);
  if (message) {
    params.set("text", message);
  }
  return `https://api.whatsapp.com/send?${params.toString()}`;
};
