import {
  ArrowRight,
  Baby,
  Beer,
  CalendarDays,
  Clock,
  CloudRain,
  Dumbbell,
  Flame,
  Footprints,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PartyPopper,
  Phone,
  ShieldCheck,
  ShowerHead,
  Sun,
  Trophy,
  Umbrella,
  Users,
  Cake,
  X,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '../../types';

const ICONS: Record<IconName, LucideIcon> = {
  whatsapp: MessageCircle,
  menu: Menu,
  close: X,
  pin: MapPin,
  clock: Clock,
  phone: Phone,
  rain: CloudRain,
  umbrella: Umbrella,
  grill: Flame,
  bar: Beer,
  shower: ShowerHead,
  kids: Baby,
  trophy: Trophy,
  ball: Footprints,
  sun: Sun,
  martial: Dumbbell,
  users: Users,
  cake: Cake,
  party: PartyPopper,
  light: Lightbulb,
  shield: ShieldCheck,
  route: Navigation,
  calendar: CalendarDays,
  arrow: ArrowRight,
};

interface IconProps {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 20 }: IconProps) {
  const Component = ICONS[name];
  return <Component size={size} aria-hidden="true" />;
}
