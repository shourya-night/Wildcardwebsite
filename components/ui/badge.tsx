import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return <span className={cn('rounded-full border border-border px-2 py-1 text-xs font-medium', className)}>{children}</span>;
}
