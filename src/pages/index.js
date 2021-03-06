/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import Layout from "../components/layouts/homeLayout";
import Hero from "../components/Hero";
import HomepageHowHelp from "../components/HomepageHowHelp";
import Mission from "../components/Mission";
import UpcomingEvents from "../components/UpcomingEvents";
import AmazonSmile from "../components/AmazonSmile";
import { TextWrapper, Wrapper } from "../components/styles";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { LMF2020 } from "../components/data/events";

// Homepage content
export default ({ data }) => (
  <Layout>
    <SEO title="Homepage" />
    <Hero {...data} />
    <TextWrapper>
      <Mission />
    </TextWrapper>
    {/* <HomepageHowHelp /> */}
    {/* <AmazonSmile /> */}
    <Wrapper>
      <UpcomingEvents
        css={css`
          margin-bottom: 2rem;
        `}
        {...LMF2020}
      />
      <TextWrapper>
        {/* <Link
          to="/table"
          css={css`
            display: grid;
            padding: 0.5rem;
            margin: 1rem auto 3rem;
            max-width: 400px;
            background-color: #cc3a3d;
            color: white;
            border-radius: 5px;
            text-align: center;
            transition: all 0.3s;
            &:hover {
              transform: translateY(-1px);
              background-color: #ff6d70;
              color: white;
            }
          `}
        >
          Purchase a Table
        </Link> */}
      </TextWrapper>
    </Wrapper>
  </Layout>
);

// query for any outside data; hero image
export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "remembering.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
// // query for any outside data
// export const query = graphql`
//   query {
//     heroImg: file(relativePath: { eq: "juliane-liebermann-542688.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(quality: 90, maxWidth: 1600) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
