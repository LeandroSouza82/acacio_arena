import { WHATSAPP_PHONE } from '../constants/config';
import type { QuickOption, ScheduleSlot } from '../types';

export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const MESSAGES = {
  general: 'Olá! Gostaria de falar com o atendimento da Acássio Arena.',
  society: 'Olá! Gostaria de reservar um horário no Society da Acássio Arena.',
  sand: 'Olá! Gostaria de reservar a Quadra de Areia da Acássio Arena.',
  muayThai: 'Olá! Gostaria de agendar uma aula experimental de Muay Thai na Acássio Arena.',
  events:
    'Olá! Gostaria de consultar disponibilidade e valores para realizar uma festa/evento na Acássio Arena.',
  championship: 'Olá! Gostaria de inscrever meu time na próxima Copa da Comunidade da Acássio Arena.',
} as const;

export const QUICK_OPTIONS: QuickOption[] = [
  { id: 'society', label: 'Reservar Society', message: MESSAGES.society },
  { id: 'sand', label: 'Reservar Quadra de Areia', message: MESSAGES.sand },
  { id: 'muaythai', label: 'Aula de Muay Thai', message: MESSAGES.muayThai },
  { id: 'events', label: 'Orçamento de Festas e Eventos', message: MESSAGES.events },
  { id: 'support', label: 'Falar com Atendimento', message: MESSAGES.general },
];

export const slotMessage = (slot: ScheduleSlot): string => {
  const court = slot.court === 'society' ? 'Society' : 'Quadra de Areia';
  return `Olá! Gostaria de reservar o horário de ${slot.weekday} às ${slot.time} no ${court} da Acássio Arena.`;
};
