import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PiChart = ({ mode = "dark", data }) => {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const parseBars = () => {
      let temp = [];
      data.map((item) => {
        temp.push(item.quantity);

        setSeries(temp);
      });
    };

    const parseLabels = () => {
      let temp = [];
      data.map((item) => {
        temp.push(item.name);

        setLabels(temp);
      });
    };
    parseBars();
    parseLabels();
  }, [data]);

  const col = mode === "dark" ? "#f8efff" : "#060608";
  const options = {
    chart: {
      foreColor: col,
      width: 380,
      type: "pie",
    },
    labels: labels,
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

  return (
    <div className="mt-4 w-[50%] md:w-[80%] md:mt-10 sm:!w-[99%]">
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
