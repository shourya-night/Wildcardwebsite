import type { LucideIcon } from 'lucide-react';
import { Bell, BookOpenCheck, ChartArea, House, LocateFixed, ShieldAlert } from 'lucide-react';

export const dashboardNav: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: '/dashboard', label: 'Overview', icon: House },
  { href: '/dashboard/attendance', label: 'Attendance', icon: BookOpenCheck },
  { href: '/dashboard/progress', label: 'Progress Report', icon: ChartArea },
  { href: '/dashboard/location', label: 'Location Tracking', icon: LocateFixed },
  { href: '/dashboard/logs', label: 'RFID Logs', icon: Bell },
  { href: '/dashboard/security', label: 'Security Alerts', icon: ShieldAlert }
];
