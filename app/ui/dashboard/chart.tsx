import Script from "next/script";
import React from "react";

const Chart = () => {
  return (
    <div className="row col-md-12 py-4">
      <div className="col-xl-7 col-md-7 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-md-5 mb-4">
        <div className="card shadow mb-4 mx-2">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
          </div>
          <div className="card-body">
            <div className="chart-bar">
              <canvas id="myBarChart"></canvas>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Script src="@/app/lib/chart-area-demo.js"></Script>
    </div>
  );
};

export default Chart;
