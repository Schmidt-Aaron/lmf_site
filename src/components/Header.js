import React from "react";
import NavMenu from "../components/NavMenu";
import { StaticQuery, Link, graphql } from "gatsby";

export default () => (
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
          gridTemplateRows: `1`,
          gridTemplateColumns: `auto`,
          padding: `1.25rem 1rem`
        }}
      >
        <div
          style={{
            gridColumn: `1 / 2`,
            gridRow: `1 / 1`,
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
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
        </div>
        <div
          style={{
            gridRow: `1 / 1`,
            gridcolumn: `2 / 4`,
            justifySelf: `end`
          }}
        >
          <NavMenu />
        </div>
      </header>
    )}
  />
);
