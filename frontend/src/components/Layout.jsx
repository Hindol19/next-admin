import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
// import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      {/* <header className="">Analytics Dashboard</header> */}
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
