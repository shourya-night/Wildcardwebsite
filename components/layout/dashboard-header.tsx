import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export function DashboardHeader({ name, role, image }: { name?: string | null; role?: string | null; image?: string | null }) {
  return (
    <header className="mb-6 flex items-center justify-between rounded-xl border border-border bg-card/90 p-4">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back</p>
        <h1 className="text-2xl font-semibold">{name || 'Wild Card User'}</h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Badge>{role || 'UNASSIGNED'}</Badge>
        {image ? (
          <Image src={image} alt="avatar" width={36} height={36} className="rounded-full" />
        ) : (
          <div className="h-9 w-9 rounded-full bg-primary/20" />
        )}
      </div>
    </header>
  );
}
