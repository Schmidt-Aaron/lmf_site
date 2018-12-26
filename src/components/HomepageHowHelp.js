/** @jsx jsx */
import React from "react";
import HowCanHelp from "./HowCanHelpWidget";
import { css, jsx } from "@emotion/core";

const amazonSmileLink = "https://smile.amazon.com/ch/46-5717849";
// inner text for components below
const helpText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint aut eaque odio laborum cum";
const involvedText =
  "Want to help out? There are many different ways you can help the cause.";
const eventText =
  "We are putting on a dinner auction in April. Come out and support a good cause!";
const amazonText =
  "We are now a participating charity on" +
  <a href={amazonSmileLink}>smile.amazon.com </a> +
  "If you select our charity for your Amazon Smile account a small portion of your puchases will be donated to us.";

//  used on the homepage only

const HomePageHowHelp = () => {
  return (
    <section>
      <h2>Help Today</h2>
      <div
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-rows: 1/1;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 5rem;
        `}
      >
        <HowCanHelp
          title="Amazon Smile"
          innerText={amazonText}
          otherSite={amazonSmileLink}
          linkTitle="Sign up for Amazon Smile"
          linkText="Learn More"
        />
        <HowCanHelp
          title="Get Involved"
          innerText={involvedText}
          link="/help"
          linkTitle="Find out how you can get involved"
          linkText="Learn More"
        />
        <HowCanHelp
          title="Come to an Event!"
          innerText={eventText}
          link="/events"
          linkTitle="Find out about our onext fun event"
          linkText="Upcoming Events"
        />
      </div>
    </section>
  );
};
export default HomePageHowHelp;
