import { RFIDLogTable } from '@/components/tables/rfid-log-table';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getRoomLogs } from '@/features/logs/service';

export default async function LogsPage() {
  const rows = await getRoomLogs();

  return (
    <div className="space-y-5">
      <Card className="p-4"><Input placeholder="Search by student, room, or station ID" aria-label="Search logs" /></Card>
      <RFIDLogTable rows={rows} />
    </div>
  );
}
