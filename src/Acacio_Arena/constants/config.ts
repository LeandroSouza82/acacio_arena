/** Variáveis centrais da Acássio Arena. Edite aqui telefone, endereço e redes. */
export const WHATSAPP_PHONE = '5500000000000'; // DDI + DDD + número, apenas dígitos

export const BRAND = {
  name: 'Acássio Arena',
  tagline: 'Tradição, Esporte e Eventos em Espaço 100% Coberto.',
} as const;

export const ADDRESS = {
  street: 'Rua Exemplo, 123 — Atualize em constants/config.ts',
  city: 'Litoral — Brasil',
  mapQuery: 'Acássio Arena',
} as const;

export const OPENING_HOURS = [
  { days: 'Segunda a Sexta', hours: '08h às 23h' },
  { days: 'Sábado e Domingo', hours: '08h às 22h' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/acassioarena',
} as const;

export const NAV_LINKS = [
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#copa', label: 'Copa & História' },
  { href: '#festas', label: 'Festas' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
] as const;
