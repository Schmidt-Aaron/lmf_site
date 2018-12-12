import React from "react";
import { Link } from "gatsby";
import logo from "../../static/images/lmf-logo.207x212.png";

// used on every page

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
        gridColumn: `1/3`,
        gridRow: `3/4`,
        padding: `1.25rem 1rem`,
        backgroundColor: `#222`,
        width: `100vw`
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
        <img
          src={logo}
          alt="light my fire homepage"
          style={{
            position: `absolute`,
            left: `20px`,
            height: `100px`,
            width: `auto`,
            margin: `0`
          }}
        />
        <p>Copyright © {year()} Light My Fire of Puget Sound</p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
