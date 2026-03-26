'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function LineChart({ data, labels }: { data: number[]; labels: string[] }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);
    chart.setOption({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: labels },
      yAxis: { type: 'value' },
      series: [{ data, type: 'line', smooth: true, areaStyle: { opacity: 0.2 } }],
      grid: { left: 24, right: 24, top: 24, bottom: 24 }
    });

    return () => chart.dispose();
  }, [data, labels]);

  return <div ref={chartRef} className="h-72 w-full" />;
}
