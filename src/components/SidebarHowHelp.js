import React from "react";
import HowCanHelp from "./HowCanHelp";

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
