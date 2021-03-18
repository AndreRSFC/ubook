import React from "react";

import styles from "./index.module.scss";

import Header from "../../components/header";
import EmptyList from "../../components/list/emptyList";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header emptyList={true} />
      <EmptyList />
    </div>
  );
};

export default Home;
