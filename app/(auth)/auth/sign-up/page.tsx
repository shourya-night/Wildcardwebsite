import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-3 text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-muted-foreground">Wild Card uses secure Google OAuth. Continue to login to register instantly.</p>
        <Link href="/auth/login" className="mt-4 inline-block text-primary">Go to login</Link>
      </Card>
    </main>
  );
}
