"use client";

import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Új", "Javított", "Javítás alatt", "Selejt"],
          datasets: [
            {
              label: "Printerek",
              data: [150, 120, 60, 70],
              backgroundColor: ["blue", "yellow", "orange", "red"],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutChart;
