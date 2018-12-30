/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Event = props => {
  return (
    <section css={{ display: `flex` }}>
      <img src={props.imgURL} alt={props.imgAlt} height="300px" width="auto" />
      <div css={{ marginLeft: `2rem`, textAlign: `left` }}>
        <p>
          <span>What:</span> {props.eventName}
        </p>
        <p>
          <span>Where:</span> {props.location}
        </p>
        <p>
          <span>When:</span> {props.date}
        </p>
        <p>
          <span>More Info:</span> {props.info}
        </p>
      </div>
    </section>
  );
};

export default Event;
