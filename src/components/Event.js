/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { CalendarIcon, ClockIcon, LocationIcon } from "./EventIcons";
import { TextWrapper } from "./styles";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

const Event = props => {
  // need to update the query based on the event background images you are trying to serve b/c static queries cannot use variables (11/12/19) https://github.com/gatsbyjs/gatsby/issues/10482

  const data = useStaticQuery(graphql`
    query {
      auction2020: file(relativePath: { eq: "MtRainier-s.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      holidayParty2019: file(relativePath: { eq: "psaa-holiday1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log(data);

  // destructure our query data
  const auction = data.auction2020.childImageSharp.fluid;
  const holidayParty = data.holidayParty2019.childImageSharp.fluid;
  const eventName = props.shortEventName;

  // switch to determine which image to use
  let imageData = null;
  switch (eventName) {
    case "auction":
      imageData = auction;
      break;
    case "holidayParty":
      imageData = holidayParty;
      break;
  }

  // add background gradient
  let backgoundImageStack = [
    imageData,
    `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    )`
  ].reverse();

  return (
    <section>
      <BackgroundImage
        fluid={backgoundImageStack}
        css={css`
          background-size: cover;
          background-position: center;
          min-height: 400px;
          color: white;
          display: grid;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
        `}
      >
        <div css={css``}>
          <h3
            css={css`
              font-size: 2rem;
              margin-bottom: 0 1rem;
            `}
          >
            {props.eventName}
          </h3>
          <p>{props.subHeader}</p>
        </div>
      </BackgroundImage>
      <TextWrapper>
        <div
          css={css`
            display: flex;
            text-align: left;
            max-width: 960px;
            margin: 0 auto 3rem;
            @media (max-width: 1024px) {
              display: block;
            }
            @media (max-width: 670px) {
              padding: 0;
            }
          `}
        >
          <div
            css={css`
              margin-right: 1rem;
              padding-right: 1rem;
              border-right: 1px solid #eee;
              @media (max-width: 1024px) {
                border-right: none;
                margin: 0;
                padding: 0;
                width: 100%;
              }
            `}
          >
            <p>{props.details}</p>
            <p>{props.info}</p>
            <hr
              css={css`
                display: none;
                @media (max-width: 1024px) {
                  display: block;
                  margin: 2rem;
                }
              `}
            />
          </div>
          <div
            css={css`
              min-width: 200px;
              @media (max-width: 1024px) {
                display: grid;
                grid-gap: 10px;
                grid-template-columns: repeat(3, 1fr);
              }
              @media (max-width: 670px) {
                display: flex;
                flex-direction: column;
                margin: auto 2rem;
              }
            `}
          >
            <div
              css={css`
                display: flex;
              `}
            >
              <span>
                <LocationIcon />
              </span>
              <p
                css={css`
                  font-size: 0.7rem;
                  margin-left: 0.5rem;
                `}
              >
                {props.location} <br />
                {props.street} <br />
                {props.city}{" "}
                <small
                  css={css`
                    display: block;
                  `}
                >
                  <a href={props.directions}>Directions</a>
                </small>
              </p>
            </div>
            <div
              css={css`
                display: flex;
                @media (max-width: 1024px) {
                  justify-content: center;
                }
                @media (max-width: 670px) {
                  justify-content: inherit;
                }
              `}
            >
              <span>
                <CalendarIcon />
              </span>
              <p
                css={css`
                  font-size: 0.7rem;
                  margin-left: 0.5rem;
                `}
              >
                {props.date}
              </p>
            </div>
            <div
              css={css`
                display: flex;
                @media (max-width: 1024px) {
                  justify-content: center;
                }
                @media (max-width: 670px) {
                  justify-content: inherit;
                }
              `}
            >
              <span>
                <ClockIcon />
              </span>
              <p
                css={css`
                  font-size: 0.7rem;
                  margin-left: 0.5rem;
                `}
              >
                {props.time}
              </p>
            </div>
          </div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default Event;
