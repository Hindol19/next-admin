import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = ({ mode = "dark", data }) => {
  // console.log(data[0]?.items);
  const [bars, setBars] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const parseBars = () => {
      let temp = [];
      data[0]?.items.map((item) => {
        temp.push({
          name: item?.name,
          data: data.map((ele) => {
            let dat = [];
            ele.items.map((it) => {
              item?.name === it?.name && dat.push(it.quantity);
            });
            return dat[0];
          }),
        });

        setBars(temp);
      });
    };

    const parseDates = () => {
      let temp = [];
      data.map((item) => {
        temp.push(item.date);
      });
      setDates(temp);
    };
    parseBars();
    parseDates();
  }, [data]);

  const col = mode === "dark" ? "#f8efff" : "#060608";

  const options = {
    chart: {
      foreColor: col,
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: dates,
    },
    yaxis: {
      title: {
        text: "Quantity Sold",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        },
      },
    },
  };
  return (
    <div className="h-full w-[95%] mt-4 w">
      <div id="chart" className="h-[90%] ">
        <ReactApexChart
          options={options}
          series={bars}
          type="bar"
          height={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
