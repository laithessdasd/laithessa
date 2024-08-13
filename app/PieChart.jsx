import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// تسجيل المكونات اللازمة لـ Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// البيانات التي سيتم عرضها في المخطط
const data = {
  labels: [
    "Made in the 90's",
    "Film-maker",
    "Intelligent",
    "Not a bum",
    "I am a dude",
    "I am always going insane",
  ],
  datasets: [
    {
      label: "Personal Traits",
      data: [15, 20, 25, 10, 10, 20], // يمكنك تعديل النسب حسب الحاجة
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
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
    },
  ],
};

// إعداد خيارات المخطط
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed) {
            label += `${context.parsed}%`;
          }
          return label;
        },
      },
    },
  },
};

// مكون المخطط الدائري
const PieChart = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <div className="relative">
      <Pie data={data} options={options} />
    </div>
  </div>
);

export default PieChart;
