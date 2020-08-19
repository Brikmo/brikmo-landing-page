import React from "react";
import Header from "../Header";
import style from "./style.module.scss";

const SupportPageTemplate = ({ contents }) => {
  return (
    <div className="page">
      <Header inverted />
      <div className={style.hero}>
        <h1 className={style.title}>How can we help you?</h1>
        <div style={{ position: "relative", marginTop: "80px" }}>
          <div className={style.searchIcon} />
          <input
            type="text"
            className={style.searchbar}
            placeholder={"Type here to search a topic..."}
          />
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns"></div>
        </div>
      </section>
    </div>
  );
};

export default SupportPageTemplate;
