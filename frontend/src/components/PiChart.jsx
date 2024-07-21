import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PiChart = ({ mode = "dark", data }) => {
  const series = [44, 55, 13, 43, 22];

  const col = mode === "dark" ? "#f8efff" : "#060608";
  const options = {
    chart: {
      foreColor: col,
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  console.log(data);
  return (
    <div className="mt-4 w-[50%]">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width="100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PiChart;
