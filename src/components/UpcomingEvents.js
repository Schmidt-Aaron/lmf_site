/** @jsx jsx */
import React from "react";
// import auction from "../../static/images/auction2019.png";
import bannerPic from "../../static/images/MtRainier-s.jpg";
import Event from "./Event";
import { css, jsx } from "@emotion/core";
import { Underlined, Wrapper } from "./styles";
import { Link } from "gatsby";
import data from "../components/data/events";

// this component is used on the homepage and the events page

const UpcomingEvents = () => {
  return (
    <section>
      <Wrapper>
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
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
