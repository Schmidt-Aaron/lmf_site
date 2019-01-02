/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import logo from "../../static/images/lmf-logo.207x212.png";
import { css, jsx } from "@emotion/core";
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
      css={css`
        grid-column: 1/3;
        grid-row: 3/4;
        padding: 1.25rem 1rem;
        background-color: #222;
        // width: 100vw;
        max-width: 100%;
        font-size: 0.75rem;
        color: #e8e8e8;
      `}
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
          css={{
            height: `100px`,
            width: `auto`,
            margin: `0`
          }}
        />
        <p css={{ margin: `0` }}>
          Copyright © {year()} Light My Fire of Puget Sound
        </p>
        <Link to="/privacy" css={{ textDecoration: `none` }}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
