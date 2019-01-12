/** @jsx jsx */
import React from "react";
import auction from "../../static/images/auction2019.png";
import Event from "./Event";
import { css, jsx } from "@emotion/core";
import { Underlined, Wrapper } from "./styles";

// this component is used on the homepage and the events page

const UpcomingEvents = () => {
  return (
    <section>
      <Wrapper>
        <Underlined>
          <h2>Upcoming Events</h2>
        </Underlined>
        <Event
          imgURL={auction}
          imgAlt="LMF silent auction 2019"
          eventName="Dinner Auction (live and silent)"
          date="April 6th, 2019"
          location="Foss Waterway Seaport 705 Dock Street, Tacoma, WA 98402"
          info="If you would like to donate, or are interested in attending
        please email us."
        />
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
