/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelp";
import styles from "./layouts/global.module.css";
import { css, jsx } from "@emotion/core";

// inner text for components below
const helpText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const involvedText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const eventText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";

//  used on the homepage only

const HomePageHowHelp = () => {
  return (
    <section className={styles.section}>
      <h2>Help Today</h2>
      <div css={{ display: `flex` }}>
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
