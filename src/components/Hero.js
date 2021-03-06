/** @jsx jsx */
import React from "react";
import { Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";
import Image from "gatsby-image";
import { colors } from "../utils/theme";

// used on homepage only
const Hero = props => {
  return (
    <section
      css={css`
        width: 100%;
        height: 100vh;
        /* min-height: 800px; */

        /* Flexbox stuff */
        display: flex;
        justify-content: center;
        align-items: center;

        /* Text styles */
        text-align: center;
        color: hsla(0, 0%, 100%, 0.95);

        /* Background styles */
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.7)
        );

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin-bottom: 5rem;
        @media (max-width: 1024px) {
          min-height: inherit;
        }
      `}
    >
      <Image
        fluid={props.heroImg.childImageSharp.fluid}
        style={{ position: "absolute" }}
        css={css`
          position: absolute;
          top: 105px;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          @media (max-width: 768px) {
            top: 80px; /** fixed header height */
          }
        `}
      />
      <div
        css={css`
          padding: 40px;
          z-index: 2;
          max-width: 800px;
        `}
      >
        <h1
          css={css`
            font-size: 10vmin;
            text-transform: uppercase;
            margin-bottom: 3rem;
            @media (max-width: 768px) {
              margin-bottom: 1rem;
            }
          `}
        >
          Light My Fire
        </h1>
        <h2
          css={css`
            margin-bottom: 0;
            @media (max-width: 768px) {
              font-size: 3vmax;
            }
          `}
        >
          A house fire can destroy everything a family owns. Our goal is to get
          them back on their feet.
        </h2>
        <Link
          to="/help"
          className="btn"
          css={css`
            /* Positioning and sizing */
            display: block;
            width: 200px;

            /* Padding and margins */
            padding: 0.5em;
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;

            /* Text styles */
            color: white;
            text-decoration: none;
            font-size: 1.5em;

            /* Border styles */
            border: 2px solid white;
            border-radius: 4px;
            background-color: ${colors.darkRed};
            transition: all 0.3s;
            &:hover {
              transform: translateY(-1px);
              background-color: ${colors.mediumRed};
              color: white;
            }
          `}
        >
          Help Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
