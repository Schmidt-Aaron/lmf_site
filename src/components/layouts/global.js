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

// global effects; used in other layouts as parent wrapper

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Light My Fire is a Puget Sound charity devoted to helping families recover from catastrophic fire damage"
            },
            {
              name: "google-site-verification",
              content: "PfmmbcIvVYhidSZL3yKTkWF_xQwXyXXjM4wRL5KI9GI"
            }
          ]}
        >
          <link rel="canonical" href="https://lightmyfireps.org/" />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    )}
  />
);
