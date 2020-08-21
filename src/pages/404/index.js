import React from "react";
import Header from "../../components/Header";
import notFound from "../../img/404.svg";
import style from "./style.module.scss";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <>
    <Header inverted />
    <div className={style.notFound}>
      <img src={notFound} />
      <h1>Page Not Found</h1>
      <p>It appears the page you were looking for couldn’t be found.</p>
      <Link to="/">
        <button className={`${style.button}`}>Go Back</button>
      </Link>
    </div>
  </>
);

export default NotFoundPage;
