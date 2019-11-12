/** @jsx jsx */
import React from "react";
import Event from "./Event";
import { css, jsx } from "@emotion/core";

import { Wrapper } from "./styles";

// this component is used on the homepage and the events page

const UpcomingEvents = props => {
  return (
    <section>
      <Wrapper>
        <Event
          shortEventName={props.shortEventName}
          imgAlt={props.imgAlt}
          eventName={props.eventName}
          subHeader={props.subHeader}
          date={props.date}
          time={props.time}
          location={props.location}
          street={props.street}
          city={props.city}
          directions={props.directions}
          info={props.info}
          details={props.details}
        />
      </Wrapper>
    </section>
  );
};

export default UpcomingEvents;
