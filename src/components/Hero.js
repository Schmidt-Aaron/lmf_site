import React from "react";

const Hero = () => {
  return (
    <section
      style={{
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`,
        paddingTop: `3rem`
      }}
    >
      <div class="hero-inner">
        <h1 style={{ fontSize: `5rem` }}>Light My Fire</h1>
        <h2>Helping families recover from fire damage!</h2>
        <a href="https://example.com/" class="btn">
          How to Help
        </a>
      </div>
    </section>
  );
};

export default Hero;
