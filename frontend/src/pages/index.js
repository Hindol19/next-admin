import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import axios from "axios";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8000/metrics", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMetrics(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <Layout>
      <h1>Dashboard</h1>
      <div>
        {metrics.map((metric, index) => (
          <div key={index}>
            <h2>{metric.name}</h2>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
