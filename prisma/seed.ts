import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'student@wildcard.local' },
    update: {},
    create: {
      email: 'student@wildcard.local',
      name: 'Aarav Mehta',
      role: Role.STUDENT,
      schoolName: 'Smart Idea Public School',
      classSection: '8-B',
      studentId: 'WC-008-21'
    }
  });

  await prisma.attendanceEvent.createMany({
    data: [
      { userId: user.id, stationId: 'ST-MAIN', status: 'PRESENT', scannedAt: new Date(), classLabel: '8-B' },
      { userId: user.id, stationId: 'ST-LIB', status: 'PRESENT', scannedAt: new Date(Date.now() - 86400000), classLabel: '8-B' }
    ]
  });

  await prisma.progressRecord.createMany({
    data: [
      { userId: user.id, subject: 'Math', score: 84, examDate: new Date('2024-04-02') },
      { userId: user.id, subject: 'Science', score: 88, examDate: new Date('2024-05-12') }
    ]
  });

  await prisma.roomLog.create({
    data: {
      userId: user.id,
      room: 'Physics Lab',
      timeIn: new Date(Date.now() - 7200000),
      timeOut: new Date(Date.now() - 3600000),
      stationId: 'ST-PHY'
    }
  });

  await prisma.locationPing.createMany({
    data: [
      { userId: user.id, latitude: 28.6139, longitude: 77.209, source: 'GPS', timestamp: new Date(Date.now() - 1800000) },
      { userId: user.id, latitude: 28.6145, longitude: 77.21, source: 'LoRa', timestamp: new Date() }
    ]
  });

  await prisma.securityAlert.create({
    data: {
      userId: user.id,
      stationId: 'ST-MAIN',
      alertType: 'Distance Alert',
      severity: 'medium',
      message: 'Student moved beyond campus threshold'
    }
  });

  await prisma.deviceStation.createMany({
    data: [
      { stationCode: 'ST-MAIN', location: 'Main Gate', status: 'ACTIVE' },
      { stationCode: 'ST-BLOCKA', location: 'Block A', status: 'ACTIVE' }
    ],
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
