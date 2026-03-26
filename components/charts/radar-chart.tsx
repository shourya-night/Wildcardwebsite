'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function RadarChart({ indicators, values }: { indicators: string[]; values: number[] }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);
    chart.setOption({
      tooltip: {},
      radar: {
        indicator: indicators.map((label) => ({ name: label, max: 100 }))
      },
      series: [{ type: 'radar', data: [{ value: values, name: 'Current Performance' }] }]
    });
    return () => chart.dispose();
  }, [indicators, values]);

  return <div ref={chartRef} className="h-72 w-full" />;
}
