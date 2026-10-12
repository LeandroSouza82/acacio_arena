import type { EventFeature } from '../types';

export const EVENT_FEATURES: EventFeature[] = [
  {
    id: 'grill',
    title: 'Salão com churrasqueira',
    description: 'Salão de apoio coberto, pronto para a sua resenha.',
    icon: 'grill',
  },
  {
    id: 'bar',
    title: 'Bar e lanchonete',
    description: 'Bebidas e lanches no próprio espaço.',
    icon: 'bar',
  },
  {
    id: 'bathrooms',
    title: 'Banheiros e vestiários',
    description: 'Estrutura completa para convidados e atletas.',
    icon: 'shower',
  },
  {
    id: 'kids',
    title: 'Área ampla e segura',
    description: 'Espaço coberto para as crianças brincarem com tranquilidade.',
    icon: 'kids',
  },
];

export const EVENT_IMAGE = '/images/party.jpg';
