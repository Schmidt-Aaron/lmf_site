import React from "react";
import { Link } from "gatsby";

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
        display: `grid`,
        gridRow: `3/3`,
        padding: `1.25rem 1rem`,
        backgroundColor: `#222`
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: `0 auto`,
          color: `white`,
          textAlign: `center`
        }}
      >
        <p>Copyright © {year()} Light My Fire of Puget Sound</p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
