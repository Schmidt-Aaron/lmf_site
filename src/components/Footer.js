import React from "react";
import NavMenu from "../components/NavMenu";
// import { Link } from "gatsby";

const Footer = () => {
  // get the current year
  const year = () => {
    const currentDate = new Date(Date.now());
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  return (
    <footer
      style={{
        padding: `1.25rem 1rem`,
        backgroundColor: `#222`,
        display: `grid`
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: `0 auto`
        }}
      >
        <p>Copyright © {year} Light My Fire of Puget Sound</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
