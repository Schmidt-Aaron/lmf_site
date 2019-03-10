/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelpWidget";
import { css, jsx } from "@emotion/core";
import smilePic from "../../static/images/2019_Valentines_smile_300x250.png";
import smilePicWide from "../../static/images/2019_Valentines_smile_728x90.png";

const amazonLink = "https://smile.amazon.com/ch/46-5717849";

// inner text for components below
const helpText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const eventText =
  "We are putting on a dinner auction in April. Come out and support a good cause!";
const amazonSmileText =
  "We are now a participating charity on Amazon Smile! If you select our charity for your Amazon Smile account a small portion of your puchases will be donated to us.";

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
            @media (max-width: 1023px) {
              display: none;
            }
          `}
        >
          <a href={amazonLink}>
            <img src={smilePic} title="Shop to Donate" />
          </a>
        </div>
        <div
          css={css`
            @media (min-width: 1024px) {
              display: none;
            }
          `}
        >
          <a href={amazonLink}>
            <img src={smilePicWide} title="Shop to Donate" />
          </a>
        </div>
        <HowCanHelp
          title="Dinner Auction"
          innerText={eventText}
          link="/events"
          linkText="Details"
        />
      </div>
    </section>
  );
};
export default SidebarHowHelp;
