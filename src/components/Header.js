import React from "react";
import NavMenu from "../components/NavMenu";
import { Link } from "gatsby";

export default props => (
  <header style={{ margin: `0 auto`, maxWidth: 1200, padding: `1.25rem 1rem` }}>
    <Link
      to="/"
      style={{
        textShadow: `none`,
        backgroundImage: `none`,
        textDecoration: `none`,
        color: `black`
      }}
    >
      <h3 style={{ display: `inline` }}>Light My Fire - Puget Sound</h3>
    </Link>

    <NavMenu />
  </header>
);
