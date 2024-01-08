import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Spent",
      data: labels.map(() => faker.number.int({ min: -500, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Income",
      data: labels.map(() => faker.number.int({ min: -100, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235)",
    },
  ],
};

export function HorizontalChart() {
  return (
    <Bar
      options={{
        indexAxis: "y" as const,
        plugins: { 
          title: {
            display: false,
            text: "Chart.js Horizontal Bar Chart",
            color: "#ffff",
          },
        },
        color: "#fff",
        font: {
          weight: "bold",
          family: "sans",
        },
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "#fff",
              font: {
                size: 10,
              },
            },
            grid: {
              color: "rgb(229, 229, 229, 0.2)",
            },
            title: {
              display: false,
              text: "Months",
              color: "#fff",
              font: {
                size: 20,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
          y: {
            ticks: {
              color: "#fff",
            },
            grid: {
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
