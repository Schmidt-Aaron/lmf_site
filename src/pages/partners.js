import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import Partners from "../components/Partners";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";

export default ({ data }) => (
  <Layout>
    <SEO title="Partners" />
    <Underlined>
      <h1>Light My Fire Partners</h1>
    </Underlined>
    <p>
      Support from Puget Sound area businesses is critical to our success, so
      we’ll highlight those partners that work with us. When contacting any of
      our business partners, be sure to tell them that you found them through
      their support of Light My Fire of Puget Sound. If you would like to see
      your business featured here, please contact us for more information on how
      to make it happen!
    </p>
    <div>
      <Partners {...data} />
    </div>
  </Layout>
);

// query for any parter logos (jpgs + pngs) to enable gatsby image optimization
// all image data is passed into the Partners component above

export const query = graphql`
  query {
    WD: file(relativePath: { eq: "1800WD_logo_lg.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    statewide: file(relativePath: { eq: "statewide.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dls: file(relativePath: { eq: "dls.250x230.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    psaa: file(relativePath: { eq: "psaa.261x131.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    servpro: file(relativePath: { eq: "servpro.250x57.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    techblox: file(relativePath: { eq: "techblox.254x55.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    westPierce: file(relativePath: { eq: "west_pierce.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
