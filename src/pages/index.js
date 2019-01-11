/** @jsx jsx */
import Layout from "../components/layouts/homeLayout";
import Hero from "../components/Hero";
import HomepageHowHelp from "../components/HomepageHowHelp";
import Mission from "../components/Mission";
import UpcomingEvents from "../components/UpcomingEvents";
import { css, jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <Hero {...data} />
    <section
      css={css`
        padding: 1.5rem 3rem;
        margin: 2rem auto;
        max-width: 1200;
      `}
    >
      <Mission />
      <HomepageHowHelp />
      <UpcomingEvents />
    </section>
  </Layout>
);

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "juliane-liebermann-542688.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
