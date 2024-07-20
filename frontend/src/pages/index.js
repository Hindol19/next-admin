import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
// import { fetchDataFromApi } from "@/components/utils/api";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/get_data");
        setMetrics(response.data);
        // console.log(response);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  console.log(metrics.sales);

  return (
    <div className="bg-light">
      <h1>Dashboard</h1>
      <div className="bg-light">
        {metrics?.sales?.map((metric, index) => (
          <div key={index}>
            Hii
            {/* <h2>{metric}</h2> */}
            {/* <p>{metric.value}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
