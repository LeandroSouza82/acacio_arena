import type { Championship, UpcomingChampionship } from '../types';
import { MESSAGES } from '../utils/whatsappHelper';

export const CHAMPIONSHIPS: Championship[] = [
  {
    id: 'copa-2022',
    year: 2022,
    title: 'Copa da Comunidade — 1ª Edição',
    summary: 'A estreia que reuniu times de bairro e fez da arena o ponto de encontro do esporte local.',
    image: '/images/society.jpg',
  },
  {
    id: 'copa-2023',
    year: 2023,
    title: 'Copa da Comunidade — 2ª Edição',
    summary: 'Mais times, mais torcida e uma final que parou a comunidade.',
    image: '/images/cup.jpg',
  },
  {
    id: 'festival-2024',
    year: 2024,
    title: 'Festival de Verão da Arena',
    summary: 'Torneios de society e areia, música e confraternização em um só fim de semana.',
    image: '/images/sand.jpg',
  },
];

export const UPCOMING: UpcomingChampionship = {
  title: 'Próxima Copa da Comunidade',
  period: 'Inscrições abertas — consulte datas',
  description: 'Monte seu time e dispute o título com os melhores da região.',
  whatsappMessage: MESSAGES.championship,
};

export const HISTORY_TEXT =
  'A Acássio Arena nasceu da paixão da comunidade pelo esporte. Hoje valorizamos cada atleta e cada time da região, ano após ano.';
