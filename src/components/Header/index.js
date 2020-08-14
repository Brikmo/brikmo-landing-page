import React from "react";
import logo from "../../img/logo.svg";
import style from "./style.module.scss";
import { Link } from "gatsby";

const Header = ({ inverted }) => {
  return (
    <div className={`container ${style.header} ${inverted && style.inverted}`}>
      <Link to="/">
        <img src={logo} alt="Brikmo" title="Brikmo" />
      </Link>
      <Link to="/">
        <button className={`${style.button} ${inverted && style.inverted}`}>
          Get the App
        </button>
      </Link>
    </div>
  );
};

export default Header;
