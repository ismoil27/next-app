// components/ChartComponent.tsx
import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import parseCSVData from "../utils/parseData";

interface MyData {
  label: string;
  value: number;
}

const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await parseCSVData();
      const data: MyData[] = rawData.map((item: any) => ({
        label: item.label as string,
        value: Number(item.value),
      }));

      if (chartRef.current && data.length > 0) {
        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
          chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: data.map((item) => item.label),
              datasets: [
                {
                  label: "Data Label",
                  data: data.map((item) => item.value),
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            },
            options: {
              // Chart options
            },
          });
        } else {
          console.error("Context not available.");
        }
      } else {
        console.error("Chart canvas or data unavailable.");
      }
    };

    fetchData();
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
