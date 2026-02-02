import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings Chart",
    },
  },
};

export function VerticalGraph({ data }) {
  console.log("VerticalGraph received data:", data);
  
  if (!data || !data.labels || data.labels.length === 0) {
    return <p>No data available for chart</p>;
  }

  return <Bar options={options} data={data} />;
}