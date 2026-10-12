import type { Sport } from '../types';
import { MESSAGES } from '../utils/whatsappHelper';

export const SPORTS: Sport[] = [
  {
    id: 'society',
    title: 'Futebol Society Sintético Coberto',
    description:
      'Grama sintética de alto padrão, iluminação esportiva e jogo garantido, faça chuva ou faça sol.',
    highlights: ['Partidas avulsas', 'Horários mensalistas', 'Iluminação esportiva'],
    icon: 'ball',
    accent: 'green',
    image: '/images/society.jpg',
    ctaLabel: 'Reservar Society',
    whatsappMessage: MESSAGES.society,
  },
  {
    id: 'sand',
    title: 'Quadra de Esportes de Areia Coberta',
    description:
      'Futevôlei, Beach Tennis e Vôlei de Areia protegidos do vento, do sol forte e da chuva.',
    highlights: ['Futevôlei', 'Beach Tennis', 'Vôlei de Areia'],
    icon: 'sun',
    accent: 'sand',
    image: '/images/sand.jpg',
    ctaLabel: 'Reservar Quadra de Areia',
    whatsappMessage: MESSAGES.sand,
  },
  {
    id: 'muaythai',
    title: 'Muay Thai & Artes Marciais',
    description:
      'Treinos técnicos com turmas para todos os níveis, do iniciante ao avançado. Venha conhecer.',
    highlights: ['Todos os níveis', 'Treino técnico', 'Aula experimental'],
    icon: 'martial',
    accent: 'sand',
    ctaLabel: 'Agendar aula experimental',
    whatsappMessage: MESSAGES.muayThai,
  },
];
