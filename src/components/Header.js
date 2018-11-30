import React from "react";
import NavMenu from "../components/NavMenu";

export default props => (
  <header>
    <h1>{props.headerText}</h1>
    <NavMenu />
  </header>
);
