import { Card } from '@/components/ui/card';
import { LocationMap } from '@/components/charts/location-map';
import { getLocationPath } from '@/features/location/service';

export default async function LocationPage() {
  const points = await getLocationPath();

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h2 className="mb-3 font-semibold">Live student path (mock)</h2>
        <LocationMap points={points} />
      </Card>
      <Card className="p-4">
        <h3 className="mb-3 font-semibold">Timestamp history</h3>
        <ul className="space-y-2 text-sm">
          {points.map((point, index) => <li key={`${point.timestamp}-${index}`}>{point.timestamp} — {point.latitude.toFixed(4)}, {point.longitude.toFixed(4)}</li>)}
        </ul>
      </Card>
    </div>
  );
}
