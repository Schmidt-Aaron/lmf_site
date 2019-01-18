/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Event = props => {
  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url(${props.imgURL});
          background-size: cover;
          background-position: center;
          min-height: 400px;
          color: white;
          display: grid;
          align-items: center;
          text-align: center;
        `}
      >
        <div css={css``}>
          {/* <img
            src={props.imgURL}
            alt={props.imgAlt}
            height="400px"
            width="auto"
          /> */}
          <h3
            css={css`
              font-size: 2rem;
              margin-bottom: 0;
            `}
          >
            {props.eventName}
          </h3>
          <p>Live and Silent</p>
        </div>
      </div>
      <div
      // css={css`
      //   margin-left: 2rem;
      //   text-align: left;
      // `}
      >
        <p>
          <span>Where:</span> {props.location}{" "}
          <small>
            <a href={props.directions}>Directions</a>
          </small>
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
