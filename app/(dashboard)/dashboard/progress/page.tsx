import { Card } from '@/components/ui/card';
import { LineChart } from '@/components/charts/line-chart';
import { RadarChart } from '@/components/charts/radar-chart';
import { getProgressInsights } from '@/features/progress/service';

export default async function ProgressPage() {
  const data = await getProgressInsights();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-4">
        <h2 className="mb-3 font-semibold">Score over time</h2>
        <LineChart data={data.trend} labels={['Term 1', 'Term 2', 'Term 3', 'Term 4', 'Term 5']} />
      </Card>
      <Card className="p-4">
        <h2 className="mb-3 font-semibold">Subject radar</h2>
        <RadarChart indicators={data.subjects} values={data.radar} />
      </Card>
    </div>
  );
}
