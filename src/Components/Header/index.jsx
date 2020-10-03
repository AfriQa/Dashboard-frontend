import React from "react";
import "./Styles.scss";

import LOGO from "../../Assets/final-logo.png";
export default function index() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
            <img src={LOGO} alt="afri-eqa-logo" />
        </div>
        <h1 className="title"> Afri-Eqa</h1>
        
      </div>
    </header>
  );
}
