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
              data: [150, 120, 60, 70, 40, 20, 10, 100, 200, 400, 350, 300],
              backgroundColor: "yellow",
              borderColor: "orange",
              borderWidth: 5,
            },
            {
              label: "Ügyfelek",
              data: [20, 20, 22, 24, 31, 34, 38, 40, 40, 40, 40, 40],
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
