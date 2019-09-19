/** @jsx jsx */
import React from "react";
// import auction from "../../static/images/auction2019.png";
import bannerPic from "../../static/images/MtRainier-s.jpg";
import Event from "./Event";
import { css, jsx } from "@emotion/core";
import { Underlined, Wrapper } from "./styles";
import { Link } from "gatsby";

// this component is used on the homepage and the events page

const UpcomingEvents = () => {
  return (
    <section>
      <Wrapper>
        <Underlined>
          <h2>Upcoming Events</h2>
        </Underlined>
        <Event
          imgURL={bannerPic}
          imgAlt="LMF silent auction 2020"
          eventName="Annual Charity Dinner Auction"
          date="April 18th, 2020"
          time="5:00 - 8:30PM"
          location="Hyatt Regency Lake Washington At Seattle's Southport"
          street="1053 Lake Washington Blvd N"
          city="Renton, WA 98056"
          directions="https://goo.gl/maps/BUebu6i366FU44PXA"
          info="If you would like to donate, or are interested in attending
        please email us. Tables are still available through the link below at a price of $1000 for 10 seats."
          details="We are pleased to announce our annual dinner auction. Join us for a night filled with fun, good eats, and great company. This year we booked the new waterfront Hyatt Regency at the Renton Landing. We have a couple special surprises cooked up for the event"
        />
        {/* <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          css={css`
            text-align: center;
          `}
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RS5L4GWE78HWG" />
        
          <button
            type="submit"
            name="submit"
            css={css`
              padding: 10px;
              text-decoration: none;
              background-color: #cc3a3d;
              color: white;
              border-radius: 5px;
              &:hover {
                transform: translateY(-1px);
                background-color: #ff6d70;
                color: white;
              }
            `}
          >
            Purchase a Table
          </button> */}
        {/* </form> */}
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
