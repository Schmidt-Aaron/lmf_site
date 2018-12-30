/**
 *
 * Any Global assets/queries or meta tags go in this file.
 * Used in the layout files
 */

import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, Link, graphql } from "gatsby";

// global effects; used in other layouts as parent wrapper

export default ({ children }) => (
  // <React.Fragment >
  //   {/* <MuiThemeProvider> */}
  //   {/* <CssBaseline>{children}</CssBaseline> */}
  //   {/* </MuiThemeProvider> */}
  //   {children}
  // </React.Fragment>
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
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "Light My Fire Puget Sound",
              content:
                "Puget Sound charity devoted to helping familes recover from catasttrophic fire damage"
            },
            {
              name: "google-site-verification",
              content: "PfmmbcIvVYhidSZL3yKTkWF_xQwXyXXjM4wRL5KI9GI"
            }
          ]}
        />
        {children}
      </div>
    )}
  />
);
