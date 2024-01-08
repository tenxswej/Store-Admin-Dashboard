import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.set("plugins.datalabels", {
  color: "#fff",
});

export const data = {
  labels: ["Meat", "Vegetables", "Rice", "Cosmetic", "Oil", "Snacks"],

  datasets: [
    {
      label: "total sales volume",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      hoverBorderColor: "#fff",
      spacing: 1,
      hoverOffset: 4,
      datalabels: {
        color: "#fff",
        font: {
          size: 20,
        },
      },
    },
  ],
};

export function PieChart() {
  return (
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: false,
        offset: 10,
        color: "white",
        font: {
          size: 30,
          weight: "bold",
          family: "sans",
        },
        responsive: true,

        plugins: {
          title: {
            display: false,
            text: "Yangon",
            color: "#ffff",
          },
          datalabels: {
            color: "#ffff",
            font: {
              size: 25,
            },
          },
          legend: {
            position: "right",
            labels: {
              font: {
                size: 15,
              },
              // boxHeight : 20,
              // boxWidth : 60,
              padding: 10,
              pointStyle: "circle",
              usePointStyle: true,
              // useBorderRadius : true, // when you use point style this thing won't work
              boxPadding: 20,
              color: "#fff", // This is default value, I show it here because to let you know it can be changed here.
              // sort(a, b, data) { // You can sort labels as you want by calling this function
              //   console.log(data)
              // },
              // generateLabels(chart) {
              //   console.log(chart)
              // },
            },
          },
        },
      }}
    />
  );
}
