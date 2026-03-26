import { prisma } from '@/lib/db/prisma';

export async function getRoomLogs() {
  return prisma.roomLog.findMany({
    include: { user: true },
    orderBy: { timeIn: 'desc' },
    take: 40
  });
}
