"use client";

import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Új", "Javított", "Javítás alatt"],
          datasets: [
            {
              label: "Printerek",
              data: [150, 120, 60],
              backgroundColor: ["blue", "yellow", "orange"],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutChart;
