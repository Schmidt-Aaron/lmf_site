/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelpWidget";
import { css, jsx } from "@emotion/core";
import { Underlined } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const amazonLink = "https://smile.amazon.com/ch/46-5717849";

// inner text for components below

const eventText =
  "Our yearly dinner auction went off without a hitch in this April (2019). Stay tuned for info on our 2020 event!";

const amazonSmileText =
  "We are now a participating charity on Amazon Smile! Use the link below to select our charity for your Amazon account and a small portion of eligible purchases will be donated to us.";

//  used on the homepage only

const SidebarHowHelp = () => {
  // query our sidebar images
  const data = useStaticQuery(graphql`
    query {
      genericSmile: file(relativePath: { eq: "amazon-smile.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      genericSmileWide: file(relativePath: { eq: "amazon-smile-wide.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const genericSmile = data.genericSmile.childImageSharp.fluid;
  const genericSmileWide = data.genericSmileWide.childImageSharp.fluid;

  return (
    <section>
      <div>
        <div
          css={css`
            @media (max-width: 970px) {
              display: none;
            }
          `}
        >
          <Underlined>
            <h3
              css={css`
                font-size: 1.1rem;
                text-align: left;
              `}
            >
              Donate When you Shop
            </h3>
          </Underlined>
          <p
            css={css`
              text-align: justify;
              line-height: 1.4;
              font-size: 0.9rem;
            `}
          >
            {amazonSmileText}
          </p>
          <a href={amazonLink}>
            <Image
              fluid={genericSmile}
              title="Shop to Donate"
              alt="link to amazon smile for LMF"
              loading="lazy"
            />
          </a>
        </div>
        <div
          css={css`
            @media (min-width: 970px) {
              display: none;
            }
          `}
        >
          <a href={amazonLink}>
            <Image
              fluid={genericSmileWide}
              title="Shop to Donate"
              alt="link to amazon smile for LMF"
              loading="lazy"
            />
          </a>
        </div>
        {/* <HowCanHelp
          title="Dinner Auction"
          innerText={eventText}
          link="/events"
          linkText="Details"
        /> */}
      </div>
    </section>
  );
};
export default SidebarHowHelp;
