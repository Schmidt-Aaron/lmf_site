/** @jsx jsx */
import React from "react";
import { Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";
import heroImage from "../../static/images/juliane-liebermann-542688.jpg";

// used on homepage only
const Hero = props => {
  return (
    <section
      css={css`
        width: 100%;
        height: 100vh;
        min-height: 800px;

        /* Flexbox stuff */
        display: flex;
        justify-content: center;
        align-items: center;

        /* Text styles */
        text-align: center;
        color: white;

        /* Background styles */
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        );

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
      `}
    >
      <Img
        fluid={props.heroImg.childImageSharp.fluid}
        style={{ position: "absolute", zIndex: "-1" }}
        css={css`
          position: absolute;
          top: 100px;
          left: 0;
          width: 100%;
          height: 100%;
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
          `}
        >
          Light My Fire
        </h1>
        <h2
          css={css`
            margin-bottom: 0;
          `}
        >
          A house fire can destroy an entire family's possessions. Our goal is
          to help them get back on their feet
        </h2>
        <Link
          to="/help"
          className="btn"
          css={{
            /* Positioning and sizing */
            display: `block`,
            width: `200px`,

            /* Padding and margins */
            padding: `0.5em`,
            marginTop: `50px`,
            marginLeft: `auto`,
            marginRight: `auto`,

            /* Text styles */
            color: `white`,
            textDecoration: `none`,
            fontSize: `1.5em`,

            /* Border styles */
            border: `2px solid white`,
            borderRadius: `4px`,
            backgroundColor: `rgba(249, 68, 68, 0.8)`
          }}
        >
          Help Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
