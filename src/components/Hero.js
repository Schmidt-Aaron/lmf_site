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
      css={{
        width: `100vw`,
        height: `100vh`,
        /* Flexbox stuff */
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,

        /* Text styles */
        textAlign: `center`,
        color: `white`,

        /* Background styles */
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))`,
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`
        // padding: `3rem 0 0 0`
      }}
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
          z-index: 5;
        `}
      >
        <h1
          css={{
            fontSize: `10vmin`,
            textTransform: `uppercase`,
            marginBottom: `4rem`
          }}
        >
          Light My Fire
        </h1>
        <h2 style={{ marginBottom: `0` }}>
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
            padding: `1em`,
            marginTop: `50px`,
            marginLeft: `auto`,
            marginRight: `auto`,

            /* Text styles */
            color: `white`,
            textDecoration: `none`,
            fontSize: `1.5em`,

            /* Border styles */
            border: `3px solid white`,
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
