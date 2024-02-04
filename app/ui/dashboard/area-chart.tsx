"use client";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AreaChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Január",
            "Február",
            "Március",
            "Április",
            "Május",
            "Június",
            "Augusztus",
            "Szeptember",
            "Október",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Bevétel",
              data: [77, 87, 100, 120, 120, 120, 144, 178, 200, 400, 500, 700],
              backgroundColor: "yellow",
              borderColor: "orange",
              borderWidth: 5,
            },
            {
              label: "Ügyfelek",
              data: [10, 11, 13, 14, 14, 14, 16, 18, 20, 40, 50, 70],
              backgroundColor: "blue",
              borderColor: "blue",
              borderWidth: 5,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default AreaChart;
