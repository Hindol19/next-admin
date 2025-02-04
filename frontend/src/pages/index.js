import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import PiChart from "@/components/PiChart";
import { useRouter } from "next/router";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [bar, setBar] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const savedUserName = localStorage.getItem("username");
    if (!token) {
      router.push("/login");
    } else {
      setUsername(savedUserName);
      // setMode("dark");
    }

    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/metrics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMetrics(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    const fetchTopProducts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/top-products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTopProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/weekly-sales",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setWeeklyData(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    fetchMetrics();
    fetchWeeklyData();
    fetchTopProducts();
  }, []);

  const getCurrentDate = () => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Call the function to get the current date
  const currentDate = getCurrentDate();
  return (
    <div className="dark:bg-dark bg-light">
      <Header username={username} bar={bar} setBar={setBar} />
      <div className="flex flex-row justify-between">
        <h2 className="dark:text-light text-dark text-2xl mx-12 mt-10 font-bold tracking-wider sm:!text-lg">
          DASHBOARD
        </h2>
        <h2 className="dark:text-light text-dark text-4xl mx-12 mt-10 tracking-wider sm:!text-xl">
          {currentDate}
        </h2>
      </div>
      <div className="flex flex-row md:flex-col items-center justify-between mx-12 ">
        <div className="my-[40px] flex flex-col md:flex-row justify-between md:items-center md:justify-evenly h-[500px] md:h-[250px] sm:!h-[500px]  md:w-full sm:!flex-col">
          <Card title="Total Sales" content={metrics.total_sales} />
          <Card title="Total Orders" content={metrics.orders} />
        </div>

        <div className="h-[500px] w-[75%] md:w-full  flex flex-col   items-center bg-primaryDark dark:bg-primary bg-opacity-60 dark:bg-opacity-100  rounded-md ml-5 md:ml-0">
          <h2 className="text-light font-semibold text-xl sm:text-sm uppercase sm:capitalize mt-8">
            {bar
              ? "Bar Chart of sales of Last 7 days"
              : "Pi Chart of sales of top 5 products"}
          </h2>
          {bar ? (
            <BarChart data={weeklyData} />
          ) : (
            <PiChart data={topProducts} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
