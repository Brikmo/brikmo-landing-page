import React from "react";
import logo from "../../img/logo.svg";
import style from "./style.module.scss";

const Header = ({ inverted }) => {
  return (
    <div className={`container ${style.header} ${inverted && style.inverted}`}>
      <img src={logo} alt="Brikmo" title="Brikmo" />
      <button className={`${style.button} ${inverted && style.inverted}`}>
        Get the App
      </button>
    </div>
  );
};

export default Header;
