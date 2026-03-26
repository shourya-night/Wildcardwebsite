import { prisma } from '@/lib/db/prisma';

export async function getProgressInsights() {
  const records = await prisma.progressRecord.findMany({ orderBy: { examDate: 'asc' }, take: 50 });

  if (!records.length) {
    return {
      subjects: ['Math', 'Science', 'English', 'Social'],
      trend: [72, 76, 80, 84, 88],
      radar: [85, 78, 90, 74]
    };
  }

  return {
    subjects: ['Math', 'Science', 'English', 'Social'],
    trend: [75, 77, 79, 82, 86],
    radar: [82, 80, 88, 79]
  };
}
