import React from "react";
import Head from "next/head";
// import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <header className="">Analytics Dashboard</header>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
