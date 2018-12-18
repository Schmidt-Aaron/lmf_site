/** @jsx jsx */
import Layout from "../components/layouts/homeLayout";
import Hero from "../components/Hero";
import HomepageHowHelp from "../components/HomepageHowHelp";
import Mission from "../components/Mission";
import UpcomingEvents from "../components/UpcomingEvents";
import { css, jsx } from "@emotion/core";
import React from "react";

export default props => (
  <Layout>
    <Hero />
    <section
      css={{ padding: `1.5rem 3rem`, margin: `2rem auto`, maxWidth: 1200 }}
    >
      <Mission
        css={css`
          max-width: 800px;
          margin: 0 auto 5rem;
        `}
      />
      <HomepageHowHelp
        css={css`
          margin: 0 auto 5rem;
        `}
      />
      <UpcomingEvents />
    </section>
  </Layout>
);
