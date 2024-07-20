import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <header className={styles.header}>Analytics Dashboard</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
