import { Card } from '@/components/ui/card';
import { getSecurityAlerts } from '@/features/security/service';

export default async function SecurityPage() {
  const alerts = await getSecurityAlerts();

  return (
    <Card className="p-4">
      <h2 className="mb-4 text-xl font-semibold">Security alerts history</h2>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={`${alert.stationId}-${index}`} className="rounded-lg border border-border p-3">
            <p className="text-sm font-medium">{alert.alertType} • {alert.stationId}</p>
            <p className="text-sm text-muted-foreground">{alert.message}</p>
            <p className="mt-1 text-xs text-muted-foreground">Severity: {alert.severity} • {new Date(alert.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
