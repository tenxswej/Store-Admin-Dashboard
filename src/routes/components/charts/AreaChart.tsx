import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

export const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: "Yangon",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132)",
      borderColor: "rgba(255, 99, 132)",
    },
    {
      fill: false,
      label: "Mandalay",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(54, 162, 235)",
      borderColor: "rgba(54, 162, 235)",
    },
  ],
};

export function AreaChart() {
  return (
    <Line
      options={{
        color: "#ffff",
        font: {
          weight: "bold",
          family: "sans",
        },
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: "#fff",
            },
            grid: {
              display: true,
              color: "rgb(229, 229, 229, 0.5)",
            },
            title: {
              display: false,
              text: "Months",
              color: "#ffff",
              font: {
                size: 20,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
          x: {
            ticks: {
              color: "#fff",
              font: {
                size: 10,
              },
            },
            grid: {
              display: true,
              color: "rgb(229, 229, 229, 0.5)",
            },
            title: {
              display: false,
              text: "Sales",
              color: "#fff",
              font: {
                size: 20,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
        },
      }}
      data={data}
    />
  );
}
