export type Accent = 'green' | 'sand';

export type IconName =
  | 'whatsapp'
  | 'menu'
  | 'close'
  | 'pin'
  | 'clock'
  | 'phone'
  | 'rain'
  | 'umbrella'
  | 'grill'
  | 'bar'
  | 'shower'
  | 'kids'
  | 'trophy'
  | 'ball'
  | 'sun'
  | 'martial'
  | 'users'
  | 'cake'
  | 'party'
  | 'light'
  | 'shield'
  | 'route'
  | 'calendar'
  | 'arrow';

export interface Sport {
  id: 'society' | 'sand' | 'muaythai';
  title: string;
  description: string;
  highlights: string[];
  icon: IconName;
  accent: Accent;
  image?: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export interface Championship {
  id: string;
  year: number;
  title: string;
  summary: string;
  image?: string;
}

export interface UpcomingChampionship {
  title: string;
  period: string;
  description: string;
  whatsappMessage: string;
}

export interface EventFeature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export type ShiftId = 'morning' | 'afternoon' | 'night';
export type SlotStatus = 'available' | 'fixed';
export type CourtId = 'society' | 'sand';

export interface ScheduleSlot {
  id: string;
  court: CourtId;
  shift: ShiftId;
  weekday: string;
  time: string;
  status: SlotStatus;
  label?: string;
}

export interface ShiftInfo {
  id: ShiftId;
  label: string;
  range: string;
}

export interface QuickOption {
  id: string;
  label: string;
  message: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}
