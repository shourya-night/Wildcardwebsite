'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-2 text-2xl font-bold">Sign in to Wild Card</h1>
        <p className="mb-5 text-sm text-muted-foreground">Use Google OAuth to access the Smart Security ecosystem.</p>
        <Button className="w-full" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>Continue with Google</Button>
        <p className="mt-4 text-sm text-muted-foreground">No account? <Link href="/auth/sign-up" className="text-primary">Create one</Link></p>
      </Card>
    </main>
  );
}
