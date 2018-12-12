import React from "react";
import NavMenu from "../components/NavMenu";
import logo from "../../static/images/lmflogo-text.png";
import { StaticQuery, Link, graphql } from "gatsby";

// used on everypage

export default () => (
  // queries gatsby-config file for site title
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          display: `grid`,
          width: `100vw`,
          gridTemplateRows: `3rem`,
          gridTemplateColumns: `auto`,
          position: `fixed`,
          backgroundColor: `white`
        }}
      >
        <div
          style={{
            gridColumn: `1`,
            gridRow: `1`,
            justifySelf: `start`,
            paddingRight: `2rem`
          }}
        >
          <Link
            to="/"
            style={{
              textShadow: `none`,
              backgroundImage: `none`,
              textDecoration: `none`,
              color: `black`
            }}
          >
            <h3 style={{ display: `none` }}>{data.site.siteMetadata.title}</h3>
            <img
              src={logo}
              alt="Light My Fire Puget Sound"
              description="Light My Fire"
            />
          </Link>
        </div>
        <div
          style={{
            gridRow: `1`,
            gridcolumn: `2`,
            justifySelf: `end`,
            paddingRight: `3rem`
          }}
        >
          <NavMenu />
        </div>
      </header>
    )}
  />
);
