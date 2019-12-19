import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import Board from "../components/Board";
import Chairman from "../components/Board/ChairmanLetter";
import SEO from "../components/seo";

export default ({ data }) => (
  <Layout>
    <SEO title="LMF Board Members" description="Meet the Light My Fire Board Members." />
    <Chairman />
    <hr />
    <Board {...data} />
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
