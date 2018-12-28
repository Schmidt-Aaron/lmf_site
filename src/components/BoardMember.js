/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

// board member template; Used on Board.js

const BoardMember = props => {
  const linkedIn = props.linkedIn || null;
  return (
    <section
      css={css`
        border: 1px solid grey;
        box-shadow: 3px 4px 6px 0px grey;
        z-index: 1;
        &:hover {
          transform: scale(1.03);
          z-index: 3;
        }
      `}
    >
      <img
        src={props.imgURL}
        alt={props.imgAlt}
        description={props.ImgDescription}
        width="100%"
        style={{ marginBottom: `0.5rem` }}
      />
      <div style={{ padding: `10px` }}>
        <h3 style={{ marginBottom: `0.5rem` }}>{props.name}</h3>
        <h4 style={{ fontSize: `0.8rem` }}>{props.job}</h4>
        <p style={{ display: `none` }}>{props.description}</p>

        {linkedIn ? <a href={linkedIn}>LinkedIn</a> : ""}
      </div>
    </section>
  );
};

export default BoardMember;
