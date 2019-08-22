/** @jsx jsx */
import React from "react";
import NavMenu from "../components/NavMenu";
import { StaticQuery, Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";

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
        logo: file(relativePath: { eq: "lmflogo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(quality: 90, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div
        className="wrapper-header"
        css={css`
          grid-row: 1;
          grid-column: 1/3;
          z-index: 5;
          border-top: solid 5px #ff6d70;
          box-shadow: 3px 2px 4px hsla(0, 0%, 0%, 0.2);
          @media (max-width: 970px) {
            position: fixed;
            min-width: 100%;
          }
        `}
      >
        <header
          css={css`
            display: grid;
            /* width: 100vw; */
            max-width: 1200px;
            margin: 0 auto;
            grid-template-rows: 100px;
            grid-template-columns: minmax(max-content, max-content) 1fr;
            /* position: fixed; */
            background-color: white;
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
              css={css`
                text-shadow: none;
                background-image: none;
                text-decoration: none;
                color: black;
              `}
              description="Light My Fire"
            >
              <h3 css={{ display: `none` }}>{data.site.siteMetadata.title}</h3>
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt={"Light My Fire Puget Sound"}
                title={"Light My Fire Puget Sound"}
                imgStyle={{ marginBottom: 0, marginLeft: `0.5rem` }}
              />
              {/* <img
                src={logoDark}
                alt="Light My Fire Puget Sound"
                description="Light My Fire"
                height="100px"
                width="auto"
                css={css`
                  margin-bottom: 0;
                  margin-left: 0.5rem;
                `}
              /> */}
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
