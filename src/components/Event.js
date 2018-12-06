import React from "react";

const Event = props => {
  return (
    <section>
      <img src={props.imgURL} alt={props.imgAlt} height="300px" width="auto" />
      <div>
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
