import AreaChart from "@/app/ui/dashboard/area-chart";
import React from "react";
import DoughnutChart from "./doughnut";
import { getChartData, getDoughnutData } from "@/app/lib/data";

const Chart = async () => {
  const year = new Date().getFullYear() - 1;
  const { bookers, income } = (await getChartData()) as any;
  const { newPrinters, repairedPrinters, repairingPrinters } =
    (await getDoughnutData()) as any;
  return (
    <div className="row col-md-12 py-4">
      <div className="col-xl-7 col-md-7 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Income and Bookers ({year})
            </h6>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <AreaChart bookers={bookers} income={income} />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-md-5 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Printers</h6>
          </div>
          <div className="card-body">
            <div className="chart-bar">
              <DoughnutChart
                newPrinters={newPrinters}
                repairedPrinters={repairedPrinters}
                repairingPrinters={repairingPrinters}
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
