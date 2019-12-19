import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import Mission from "../components/Mission";
import SEO from "../components/seo";

export default ({ data }) => (
  <Layout>
    <SEO title="About Our Work" 
    description="Learn about how Light My Fire helps our local community." />
    <Mission />
    {/* <hr /> */}
    {/* <Chairman /> */}
    {/* <hr /> */}
    {/* <Board {...data} /> */}
  </Layout>
);

export const query = graphql`
  query {
    rob: file(relativePath: { eq: "robertf.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dave: file(relativePath: { eq: "dave.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    davidKean: file(relativePath: { eq: "davidKean.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    diane: file(relativePath: { eq: "diane.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    jeremy: file(relativePath: { eq: "jeremy.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ryanJensen: file(relativePath: { eq: "ryanJensen.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    richRye: file(relativePath: { eq: "richRye1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tammyLamb: file(relativePath: { eq: "tammyLamb2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    teraRose: file(relativePath: { eq: "teraRose.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
