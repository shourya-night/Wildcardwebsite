import { AttendanceTable } from '@/components/tables/attendance-table';
import { LineChart } from '@/components/charts/line-chart';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { getAttendanceOverview, getAttendanceTable } from '@/features/attendance/service';

export default async function AttendancePage() {
  const overview = await getAttendanceOverview();
  const rows = await getAttendanceTable();

  return (
    <div className="space-y-6">
      <Card className="grid gap-4 p-4 md:grid-cols-3">
        <Input type="date" aria-label="Date filter" />
        <Select aria-label="Class filter"><option>All Classes</option><option>8-A</option><option>8-B</option></Select>
        <p className="text-sm text-muted-foreground">Teacher view: Use filters to inspect classroom-level scans.</p>
      </Card>
      <Card className="p-4"><h2 className="mb-3 font-semibold">Attendance trend</h2><LineChart data={overview.weekly} labels={['Mon','Tue','Wed','Thu','Fri','Sat','Sun']} /></Card>
      <AttendanceTable rows={rows} />
    </div>
  );
}
