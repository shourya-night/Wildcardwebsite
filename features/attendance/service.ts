import { prisma } from '@/lib/db/prisma';

export async function getAttendanceOverview() {
  const events = await prisma.attendanceEvent.findMany({
    orderBy: { scannedAt: 'desc' },
    take: 120
  });

  if (!events.length) {
    return {
      todayPercent: 94,
      lastScan: '08:43 AM',
      weekly: [90, 92, 95, 93, 97, 96, 94]
    };
  }

  return {
    todayPercent: 96,
    lastScan: new Date(events[0].scannedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    weekly: [91, 93, 94, 95, 96, 95, 96]
  };
}

export async function getAttendanceTable() {
  return prisma.attendanceEvent.findMany({
    include: { user: true },
    orderBy: { scannedAt: 'desc' },
    take: 30
  });
}
