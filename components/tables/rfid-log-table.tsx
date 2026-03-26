import { Card } from '@/components/ui/card';

interface LogRow {
  id: string;
  room: string;
  timeIn: Date;
  timeOut: Date | null;
  stationId: string;
  user: { name: string | null; studentId: string | null };
}

export function RFIDLogTable({ rows }: { rows: LogRow[] }) {
  return (
    <Card className="overflow-x-auto p-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-muted-foreground">
            <th>Student</th>
            <th>Student ID</th>
            <th>Room</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Station ID</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-border">
              <td className="py-3">{row.user.name || 'Unknown'}</td>
              <td className="py-3">{row.user.studentId || '--'}</td>
              <td className="py-3">{row.room}</td>
              <td className="py-3">{row.timeIn.toLocaleString()}</td>
              <td className="py-3">{row.timeOut ? row.timeOut.toLocaleString() : '--'}</td>
              <td className="py-3">{row.stationId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
