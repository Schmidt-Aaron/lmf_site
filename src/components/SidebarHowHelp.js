/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelp";
import { css, jsx } from "@emotion/core";

// inner text for components below
const helpText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const involvedText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const eventText =
  "We put on a large charity auction / dinner event once a year ";
const amazonSmileText =
  "We are now a participating charity on Amazon Smile! If you select our charity for your Amazon Smile account a small portion of your puchases will be donated to us. There are no costs involved - just selecting our charity.";

//  used on the homepage only

const HomePageHowHelp = () => {
  return (
    <section>
      <h2>Help Out Today</h2>
      <div>
        <HowCanHelp
          title="Donations"
          innerText={helpText}
          link="/"
          linkText="Donate"
        />
        <HowCanHelp
          title="Get Involved"
          innerText={involvedText}
          link="/help"
          linkText="Learn More"
        />
        <HowCanHelp
          title="Amazon Smile"
          innerText={amazonSmileText}
          link="/events"
          linkText="Learn More"
        />
      </div>
    </section>
  );
};
export default HomePageHowHelp;
