import { prisma } from '@/lib/db/prisma';

export async function getSecurityAlerts() {
  const alerts = await prisma.securityAlert.findMany({
    orderBy: { createdAt: 'desc' },
    take: 30
  });

  if (!alerts.length) {
    return [
      { alertType: 'Fire Alert', severity: 'critical', message: 'Floor 2 fire sensor triggered', stationId: 'ST-201', createdAt: new Date() },
      { alertType: 'Door Open', severity: 'medium', message: 'Emergency doors auto-opened', stationId: 'ST-MAIN', createdAt: new Date() }
    ];
  }

  return alerts;
}
