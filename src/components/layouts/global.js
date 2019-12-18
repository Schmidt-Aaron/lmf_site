/**
 *
 * Any Global assets/queries or meta tags go in this file.
 * Used in the layout files
 */

/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";

// global effects; used only in homelayout.js
// TODO refactor away!!

export default ({ children }) => (
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
      <div
        css={css`
          h1 {
            font-weight: 500;
          }
        `}
      >
        {children}
      </div>
    )}
  />
);
