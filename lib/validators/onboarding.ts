import { z } from 'zod';

export const onboardingSchema = z.object({
  role: z.enum(['STUDENT', 'TEACHER', 'PARENT', 'STAFF']),
  schoolName: z.string().min(2),
  classSection: z.string().optional(),
  studentId: z.string().optional()
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
