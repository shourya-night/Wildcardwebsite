import { prisma } from '@/lib/db/prisma';

export async function getLocationPath() {
  const pings = await prisma.locationPing.findMany({
    orderBy: { timestamp: 'desc' },
    take: 20
  });

  if (!pings.length) {
    return [
      { latitude: 28.6139, longitude: 77.209, timestamp: '09:05' },
      { latitude: 28.6141, longitude: 77.2108, timestamp: '09:22' },
      { latitude: 28.6144, longitude: 77.2121, timestamp: '09:40' }
    ];
  }

  return pings.map((ping) => ({
    latitude: ping.latitude,
    longitude: ping.longitude,
    timestamp: ping.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }));
}
