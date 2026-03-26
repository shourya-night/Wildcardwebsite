import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { getAttendanceOverview } from "@/features/attendance/service";
import { getSecurityAlerts } from "@/features/security/service";
import { auth } from "@/lib/auth/session";

export default async function DashboardOverviewPage() {
  const session = await auth();

  // 1) Must be signed in
  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  // 2) Must have completed onboarding (role chosen)
  if (!session.user.role) {
    redirect("/auth/onboarding");
  }

  // 3) Fetch data (wrap to avoid hard crash if mock/db not ready)
  const [attendance, alerts] = await Promise.all([
    getAttendanceOverview().catch(() => ({
      todayPercent: 0,
      lastScan: "—",
      weekly: [0, 0, 0, 0, 0, 0, 0],
    })),
    getSecurityAlerts().catch(() => []),
  ]);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Today attendance</p>
          <p className="text-2xl font-semibold">{attendance.todayPercent}%</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Last scan</p>
          <p className="text-2xl font-semibold">{attendance.lastScan}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Active alerts</p>
          <p className="text-2xl font-semibold">{alerts.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Station status</p>
          <p className="text-2xl font-semibold">Operational</p>
        </Card>
      </section>

      <Card className="p-4">
        <h2 className="mb-3 font-semibold">Weekly attendance trend</h2>
        <LineChart data={attendance.weekly} labels={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]} />
      </Card>
    </div>
  );
}
