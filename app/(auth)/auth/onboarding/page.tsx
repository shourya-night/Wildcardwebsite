import { completeOnboarding } from '@/features/auth/actions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-xl p-6">
        <h1 className="mb-5 text-2xl font-semibold">Complete onboarding</h1>
        <form action={completeOnboarding} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Role</label>
            <Select name="role" required>
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
              <option value="PARENT">Parent</option>
              <option value="STAFF">Staff</option>
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-sm">School Name</label>
            <Input name="schoolName" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Class Section</label>
            <Input name="classSection" placeholder="e.g. 8-B" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Student ID</label>
            <Input name="studentId" placeholder="if applicable" />
          </div>
          <Button type="submit">Finish setup</Button>
        </form>
      </Card>
    </main>
  );
}
