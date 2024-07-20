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

  return (
    <div className="">
      <Header username={username} />
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
