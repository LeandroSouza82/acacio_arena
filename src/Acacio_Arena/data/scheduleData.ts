import type { CourtId, ScheduleSlot, ShiftId, ShiftInfo } from '../types';

export const SHIFTS: ShiftInfo[] = [
  { id: 'morning', label: 'Manhã', range: '08h – 12h' },
  { id: 'afternoon', label: 'Tarde', range: '12h – 18h' },
  { id: 'night', label: 'Noite', range: '18h – 23h' },
];

export const COURTS: { id: CourtId; label: string }[] = [
  { id: 'society', label: 'Society' },
  { id: 'sand', label: 'Quadra de Areia' },
];

type SlotSeed = [ShiftId, string, string, 'available' | 'fixed', string?];

const SEEDS: Record<CourtId, SlotSeed[]> = {
  society: [
    ['morning', 'Seg a Sex', '09h', 'available'],
    ['morning', 'Sábado', '10h', 'available'],
    ['afternoon', 'Seg a Sex', '15h', 'available'],
    ['afternoon', 'Domingo', '16h', 'fixed', 'Mensalista'],
    ['night', 'Segunda', '20h', 'fixed', 'Mensalista'],
    ['night', 'Terça', '21h', 'available'],
    ['night', 'Quarta', '20h', 'fixed', 'Mensalista'],
    ['night', 'Quinta', '21h', 'available'],
    ['night', 'Sexta', '20h', 'fixed', 'Mensalista'],
  ],
  sand: [
    ['morning', 'Seg a Sex', '08h', 'available'],
    ['morning', 'Sábado', '09h', 'available'],
    ['afternoon', 'Seg a Sex', '16h', 'available'],
    ['afternoon', 'Domingo', '15h', 'available'],
    ['night', 'Terça', '19h', 'fixed', 'Turma fixa'],
    ['night', 'Quarta', '20h', 'available'],
    ['night', 'Quinta', '19h', 'fixed', 'Turma fixa'],
    ['night', 'Sexta', '20h', 'available'],
  ],
};

export const SCHEDULE: ScheduleSlot[] = (Object.keys(SEEDS) as CourtId[]).flatMap((court) =>
  SEEDS[court].map(([shift, weekday, time, status, label], index) => ({
    id: `${court}-${index}`,
    court,
    shift,
    weekday,
    time,
    status,
    label,
  })),
);
