/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";

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
      {/* <img
        src={props.imgURL}
        alt={props.imgAlt}
        description={props.ImgDescription}
        width="100%"
        css={css`
        margin-bottom: 0.5rem;
      `} 
      />
      */}
      <Img
        fluid={props.img.childImageSharp.fluid}
        // css={css`
        //   margin-bottom: 0.5rem;
        // `}
      />
      <div
        css={css`
          padding: 10px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0.5rem;
          `}
        >
          {props.name}
        </h3>
        <h4
          css={css`
            font-size: 0.8rem;
          `}
        >
          {props.job}
        </h4>
        <p
          css={css`
            display: none;
          `}
        >
          {props.description}
        </p>

        {linkedIn ? <a href={linkedIn}>LinkedIn</a> : ""}
      </div>
    </section>
  );
};

export default BoardMember;
