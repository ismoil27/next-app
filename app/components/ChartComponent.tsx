import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import parseCSVData from "../utils/parseData";

interface MyData {
  label: string;
  value: number;
}

const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await parseCSVData();
        const data = rawData.filter((item) => item.label && !isNaN(item.value));

        if (chartRef.current && data.length > 0) {
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          const ctx = chartRef.current.getContext("2d");
          if (ctx) {
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
            console.error("Canvas context not available.");
          }
        } else {
          console.error("Chart canvas or data unavailable.");
        }
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default ChartComponent;
