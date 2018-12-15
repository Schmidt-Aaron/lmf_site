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
          title="Come to an Event!"
          innerText={eventText}
          link="/events"
          linkText="Upcoming Events"
        />
      </div>
    </section>
  );
};
export default HomePageHowHelp;
