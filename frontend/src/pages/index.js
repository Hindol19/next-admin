import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import { useRouter } from "next/router";
// import { fetchDataFromApi } from "@/components/utils/api";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [username, setUsername] = useState("");

  const router = useRouter();
  useEffect(() => {
    // localStorage.clear();
    const token = localStorage.getItem("token");
    const savedUserName = localStorage.getItem("username");
    if (!token) {
      router.push("/login");
    } else {
      setUsername(savedUserName);
    }
  }, []);
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

  const getCurrentDate = () => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Call the function to get the current date
  const currentDate = getCurrentDate();
  return (
    <div className="">
      <Header username={username} />
      <div className="flex flex-row justify-between">
        <h2 className="text-light text-2xl mx-12 mt-10 font-bold tracking-wider">
          DASHBOARD
        </h2>
        <h2 className="text-light text-4xl mx-12 mt-10 tracking-wider">
          {currentDate}
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between mx-12">
        <div className="my-[40px] flex flex-col justify-between h-[500px]">
          <Card title="Total Sales" content={metrics.total_sales} />
          <Card title="Total Orders" content={metrics.orders} />
        </div>

        <div className="h-[500px] w-[75%]  flex flex-col justify-center  items-center bg-primary  rounded-md">
          <h2 className="text-light font-semibold text-xl uppercase mt-8">
            Bar Chart of sales of Last 7 days
          </h2>
          <BarChart data={weeklyData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
