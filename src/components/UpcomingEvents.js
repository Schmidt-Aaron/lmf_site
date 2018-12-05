import React from "react";
import auction from "../../static/images/auction2019.png";

const UpcomingEvents = () => {
  return (
    <section>
      <h2>Upcoming Events</h2>
      <img src={auction} alt="lmf silent auction 2019" />
      <p>Live and Silent Auction Dinner</p>
      <p>Where: Foss Waterway Seaport 705 Dock Street, Tacoma, WA 98402</p>
      <p>When: April 6th, 2019</p>
      <p>
        More Info: If you would like to donate, or are interested in attending
        please email us.
      </p>
    </section>
  );
};

export default UpcomingEvents;
