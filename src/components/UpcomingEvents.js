import React from "react";
import auction from "../../static/images/auction2019.png";
import Event from "./Event";

const UpcomingEvents = () => {
  return (
    <section>
      <h2>Upcoming Events</h2>
      <Event
        imgURL={auction}
        imgAlt="LMF silent auction 2019"
        eventName="Live and Silent Auction + Dinner"
        date="April 6th, 2019"
        location="Foss Waterway Seaport 705 Dock Street, Tacoma, WA 98402"
        info="If you would like to donate, or are interested in attending
        please email us."
      />
    </section>
  );
};

export default UpcomingEvents;
