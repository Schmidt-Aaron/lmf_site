/** @jsx jsx */
import React from "react";
import bannerPic from "../../static/images/MtRainier-s.jpg";
import Event from "./HomepageEvent";
import { css, jsx } from "@emotion/core";
import { Underlined, Wrapper } from "./styles";
import data from "../components/data/events";
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
          imgAlt={data.imgAlt}
          eventName={data.eventName}
          date={data.date}
          time={data.time}
          location={data.location}
          street={data.street}
          city={data.city}
          directions={data.directions}
          info={data.info}
          details={data.details}
        />
        <Link
          to="/table"
          css={css`
            display: grid;
            padding: 0.5rem;
            margin: 1rem auto;
            max-width: 400px;
            background-color: #cc3a3d;
            color: white;
            border-radius: 5px;
            text-align: center;
            transition: all 0.3s;
            &:hover {
              transform: translateY(-1px);
              background-color: #ff6d70;
              color: white;
            }
          `}
        >
          Purchase a Table
        </Link>
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
