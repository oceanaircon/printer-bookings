import AreaChart from "@/app/ui/dashboard/area-chart";
import React from "react";
import DoughnutChart from "./doughnut";

const Chart = () => {
  return (
    <div className="row col-md-12 py-4">
      <div className="col-xl-7 col-md-7 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Bevétel és Ügyfélszám
            </h6>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <AreaChart></AreaChart>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-md-5 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Printerek</h6>
          </div>
          <div className="card-body">
            <div className="chart-bar">
              <DoughnutChart></DoughnutChart>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
