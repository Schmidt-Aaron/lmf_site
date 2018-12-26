/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelpWidget";
import { css, jsx } from "@emotion/core";

// inner text for components below
const helpText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const involvedText = "";
const eventText =
  "We are putting on a dinner auction in April. Come out and support a good cause!";
const amazonSmileText =
  "We are now a participating charity on Amazon Smile! If you select our charity for your Amazon Smile account a small portion of your puchases will be donated to us.";

//  used on the homepage only

const HomePageHowHelp = () => {
  return (
    <section>
      <h2>Help Out Today</h2>
      <div>
        <HowCanHelp
          title="Amazon Smile"
          innerText={amazonSmileText}
          link="/help"
          linkText="Learn More"
        />
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
export default HomePageHowHelp;
