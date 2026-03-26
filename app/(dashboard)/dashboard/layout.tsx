import { redirect } from 'next/navigation';
import { Sidebar } from '@/components/layout/sidebar';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { auth } from '@/lib/auth/session';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) redirect('/auth/login');
  if (!session.user.role) redirect('/auth/onboarding');

  return (
    <div className="flex min-h-screen gap-6 p-4">
      <Sidebar />
      <main className="w-full py-2 pr-2">
        <DashboardHeader name={session.user.name} role={session.user.role} image={session.user.image} />
        {children}
      </main>
    </div>
  );
}
