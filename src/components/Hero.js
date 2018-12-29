/** @jsx jsx */
import React from "react";
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";
import heroImage from "../../static/images/juliane-liebermann-542688.jpg";
// used on homepage only

const Hero = () => {
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`,
        padding: `3rem 0 0 0`
      }}
    >
      <div>
        <h1
          css={{
            fontSize: `5rem`,
            textTransform: `uppercase`,
            marginBottom: `4rem`
          }}
        >
          Light My Fire
        </h1>
        <h2 style={{ marginBottom: `1rem` }}>
          A house fire can destroy an entire family's possessions
        </h2>
        <h3>Our mission is to help them get back on their feet</h3>
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
            borderRadius: `20px`,
            backgroundColor: `rgba(147, 112, 219, 0.8)`
          }}
        >
          Help Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
