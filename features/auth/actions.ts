'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Role } from '@prisma/client';
import { auth } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { onboardingSchema } from '@/lib/validators/onboarding';

export async function completeOnboarding(formData: FormData): Promise<void> {
  // IMPORTANT:
  // Server actions used in <form action={...}> MUST return void.
  // Do NOT return objects like { error: ... }.

  const session = await auth();
  if (!session?.user?.id) redirect('/auth/login');

  const parsed = onboardingSchema.safeParse({
    role: formData.get('role'),
    schoolName: formData.get('schoolName'),
    classSection: formData.get('classSection') || undefined,
    studentId: formData.get('studentId') || undefined
  });

  if (!parsed.success) {
    redirect('/auth/onboarding?error=invalid_payload');
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      role: parsed.data.role as Role,
      schoolName: parsed.data.schoolName,
      classSection: parsed.data.classSection,
      studentId: parsed.data.studentId
    }
  });

  revalidatePath('/dashboard');
  redirect('/dashboard');
}
