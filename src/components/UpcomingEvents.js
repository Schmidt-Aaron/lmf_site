/** @jsx jsx */
import React from "react";
// import auction from "../../static/images/auction2019.png";
import bannerPic from "../../static/images/MtRainier.jpg";
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
          imgURL={bannerPic}
          imgAlt="LMF silent auction 2019"
          eventName="Annual Charity Dinner Auction"
          date="April 6th, 2019"
          time="5:00 - 8:30PM"
          location="Foss Waterway Seaport"
          street="705 Dock Street,"
          city="Tacoma, WA 98402"
          directions="https://goo.gl/maps/GTTWGpB4uiR2"
          info="If you would like to donate, or are interested in attending
        please email us. Tables are still available through the link below at a price of $700 for 10 seats."
          details="We are pleased to annouce our annual dinner auction. Join us for a night filled with fun, good eats, and great company. This year we booked the awesome Foss Waterway down in Tacoma. We have a couple special surprises cooked up for the event"
        />
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          css={css`
            text-align: center;
          `}
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RS5L4GWE78HWG" />
          {/* <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          /> */}
          <button type="submit" name="submit">
            Purchase a Table
          </button>
        </form>
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
