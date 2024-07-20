import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
// import { fetchDataFromApi } from "@/components/utils/api";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/metrics"
        );
        setMetrics(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/weekly-sales"
        );
        setWeeklyData(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    fetchMetrics();
    fetchWeeklyData();
  }, []);

  // console.log(weeklyData);

  // return (
  //   <div className="bg-light">
  //     <h1>Dashboard</h1>
  //     <div className="bg-light">
  //       {metrics?.sales?.map((metric, index) => (
  //         <div key={index}>
  //           Hii
  //           {/* <h2>{metric}</h2> */}
  //           {/* <p>{metric.value}</p> */}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="">
      <Header />
      {/* <div className="mx-5 my-10">
        <div className="bg-primary w-[40%]">
          <h1 className="text-2xl text-center py-3">Total Sales </h1>
          <div className="flex flex-row w-full justify-between px-8 py-4 border-b-2 font-bold first-line:border-opacity-40 border-dark bg-primaryDark">
            <div className="">Date</div>
            <div className="">Total Sales</div>
          </div>
          {metrics.map((item) => {
            return (
              <div className="flex flex-row w-full justify-between px-8 py-4 border-b-2 border-opacity-40 border-dark bg-primaryDark">
                <div className="">{item.date}</div>
                <div className="">{item.total_sales}</div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div> */}
      <div className="my-[80px] mx-5 flex flex-row justify-evenly">
        <Card title="Total Sales" content={metrics.total_sales} />
        <Card title="Total Orders" content={metrics.orders} />
      </div>

      <div className="h-[500px] w-[80%] flex flex-col justify-center  items-center bg-primary mx-auto rounded-2xl">
        <h2 className="text-light font-semibold text-xl uppercase mt-8">
          Bar Chart of sales of Last 7 days
        </h2>
        <BarChart data={weeklyData} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
