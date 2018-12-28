/** @jsx jsx */
import React from "react";
import NavMenu from "../components/NavMenu";
import logo from "../../static/images/lmflogo-text.png";
import { StaticQuery, Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";

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
      <div
        className="wrapper-header"
        css={css`
          box-shadow: #eee 0px 3px 3px;
        `}
      >
        <header
          css={css`
            display: grid;
            /* width: 100vw; */
            max-width: 1600px;
            margin: 0 auto;
            grid-template-rows: 100px;
            grid-template-columns: minmax(max-content, max-content) 1fr;
            /* position: fixed; */
            background-color: white;
            @media (max-width: 970px) {
              grid-template-rows: auto;
              text-align: center;
              & div {
                min-width: 100%;
              }
            }
          `}
        >
          <div
            css={css`
              grid-column: 1;
              grid-row: 1;
              justify-self: start;
              @media (max-width: 970px) {
                min-width: 100%;
                grid-row: 1;
                grid-column: span 2;
                justify-self: center;
              }
            `}
          >
            <Link
              to="/"
              css={{
                textShadow: `none`,
                backgroundImage: `none`,
                textDecoration: `none`,
                color: `black`
              }}
            >
              <h3 css={{ display: `none` }}>{data.site.siteMetadata.title}</h3>
              <img
                src={logo}
                alt="Light My Fire Puget Sound"
                description="Light My Fire"
                height="100px"
                width="auto"
                style={{ marginBottom: 0 }}
              />
            </Link>
          </div>
          <div
            css={css`
              grid-row: 1;
              grid-column: 2;
              justify-self: end;
              align-self: end;
              @media (max-width: 970px) {
                min-width: 100%;
                grid-row: 2;
                grid-column: span 2;
                justify-self: center;
              }
            `}
          >
            <NavMenu />
          </div>
        </header>
      </div>
    )}
  />
);
