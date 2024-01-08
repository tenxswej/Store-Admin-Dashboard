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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Yangon Sales",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgba(255, 99, 132)",
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
    },
    {
      label: "Mandalay Sales",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgba(54, 162, 235)",
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
    },
  ],
};

export function VerticalBar() {
  return (
    <Bar
      options={{
        color: "white",
        font: {
          size: 30,
          weight: "bold",
          family: "sans",
        },
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "#fff",
            },
            grid: {
              display: false,
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
              font: {
                size: 10,
              },
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
      className='bg-opacity-30 rounded-xl'
    />
  );
}
