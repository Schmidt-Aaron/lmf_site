/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelpWidget";
import { css, jsx } from "@emotion/core";
import { Underlined } from "./styles";
import genericSmile from "../../static/images/amazon-smile.jpg";
import genericSmileWide from "../../static/images/amazon-smile-wide.jpg";

const amazonLink = "https://smile.amazon.com/ch/46-5717849";

// inner text for components below

const eventText =
  "Our yearly dinner auction went off without a hitch in this April (2019). Stay tuned for info on our 2020 event!";
// text for last event
// const eventText =
//   "We are putting on a dinner auction in April. Come out and support a good cause!";
const amazonSmileText =
  "We are now a participating charity on Amazon Smile! Use the link below to select our charity for your Amazon account and a small portion of eligible purchases will be donated to us.";

//  used on the homepage only

const SidebarHowHelp = () => {
  return (
    <section>
      <div>
        {/* <HowCanHelp
          title="Donate While You Shop"
          innerText={amazonSmileText}
          link="/help"
          linkText="Learn More"
        /> */}
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
            <img src={genericSmile} title="Shop to Donate" />
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
            <img src={genericSmileWide} title="Shop to Donate" />
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
