"use client";

import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({
  newPrinters,
  repairedPrinters,
  repairingPrinters,
}: {
  newPrinters: number;
  repairedPrinters: number;
  repairingPrinters: number;
}) => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["New", "Repaired", "Repairing"],
          datasets: [
            {
              label: "Printerek",
              data: [newPrinters, repairedPrinters, repairingPrinters],
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
