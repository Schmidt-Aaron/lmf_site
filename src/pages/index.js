/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import Layout from "../components/layouts/homeLayout";
import Hero from "../components/Hero";
import HomepageHowHelp from "../components/HomepageHowHelp";
import Mission from "../components/Mission";
import UpcomingEvents from "../components/HomepageUpcomingEvents";
import AmazonSmile from "../components/AmazonSmile";
import { TextWrapper } from "../components/styles";

// Homepage content
export default ({ data }) => (
  <Layout>
    <Hero {...data} />
    <TextWrapper>
      <Mission />
    </TextWrapper>
    {/* <HomepageHowHelp /> */}
    {/* <AmazonSmile /> */}
    <UpcomingEvents />
  </Layout>
);

// query for any outside data
export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "juliane-liebermann-542688.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
