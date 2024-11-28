"use client";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AreaChart = ({
  bookers,
  income,
}: {
  bookers: Number[];
  income: Number[];
}) => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Sep",
            "Okt",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Income",
              data: income,
              backgroundColor: "yellow",
              borderColor: "orange",
              borderWidth: 5,
            },
            {
              label: "Bookers / 10000",
              data: bookers,
              backgroundColor: "green",
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
