import { Role } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: Role | null;
      schoolName?: string | null;
      classSection?: string | null;
      studentId?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    role?: Role | null;
    schoolName?: string | null;
    classSection?: string | null;
    studentId?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role | null;
    schoolName?: string | null;
    classSection?: string | null;
    studentId?: string | null;
  }
}
