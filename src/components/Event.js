/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { CalendarIcon, ClockIcon, LocationIcon } from "./EventIcons";

const Event = props => {
  return (
    <section>
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
          margin-bottom: 3rem;
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
              margin-bottom: 0 1rem;
            `}
          >
            {props.eventName}
          </h3>
          <p>Live and Silent</p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
          @media (max-width: 1024px) {
            display: block;
          }
        `}
      >
        <div
          css={css`
            margin-right: 1rem;
            padding-right: 1rem;
            border-right: 1px solid #eee;
            @media (max-width: 1024px) {
              border-right: none;
              margin: 0;
              padding: 0;
              width: 100%;
            }
          `}
        >
          <p>{props.details}</p>
          <p>{props.info}</p>
          <hr
            css={css`
              display: none;
              @media (max-width: 1024px) {
                display: block;
              }
            `}
          />
        </div>
        <div
          css={css`
            min-width: 200px;
            @media (max-width: 1024px) {
              display: grid;
              grid-gap: 10px;
              grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: 670px) {
              display: flex;
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <span>
              <LocationIcon />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.location} <br />
              {props.street} <br />
              {props.city}{" "}
              <small
                css={css`
                  display: block;
                `}
              >
                <a href={props.directions}>Directions</a>
              </small>
            </p>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <span>
              <CalendarIcon />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.date}
            </p>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <span>
              <ClockIcon />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.time}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
