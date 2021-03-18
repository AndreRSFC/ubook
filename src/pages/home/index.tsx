import React from "react";

import styles from "./index.module.scss";

import Header from "../../components/header";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header emptyList={true} />
    </div>
  );
};

export default Home;
