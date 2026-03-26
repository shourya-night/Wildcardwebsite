import { Card } from '@/components/ui/card';

interface AttendanceRow {
  id: string;
  status: string;
  classLabel: string | null;
  scannedAt: Date;
  user: { name: string | null };
}

export function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
  return (
    <Card className="overflow-x-auto p-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-muted-foreground">
            <th className="pb-3">Student</th>
            <th className="pb-3">Class</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Scan Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-border">
              <td className="py-3">{row.user.name || 'Unknown'}</td>
              <td className="py-3">{row.classLabel || 'N/A'}</td>
              <td className="py-3">{row.status}</td>
              <td className="py-3">{row.scannedAt.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
