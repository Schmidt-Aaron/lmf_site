/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";

const HowCanHelp = props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px black solid;
        padding: 1rem;
        text-align: center;
        margin: 0.5rem 0;
        border-radius: 5px;
      `}
    >
      <h3>{props.title}</h3>
      <p>{props.innerText}</p>
      {// use props.otherSite for outsite links -- props.link for inner links
      !props.link ? (
        <a
          href={props.otherSite}
          target="_blank"
          title={props.linkTitle}
          css={css`
            padding: 10px;
            text-decoration: none;
            background-color: #cc3a3d;
            color: white;
            border-radius: 5px;
            &:hover {
              transform: translateY(-1px);
              background-color: #ff6d70;
              color: white;
            }
          `}
        >
          {props.linkText}
        </a>
      ) : (
        <Link
          to={props.link}
          title={props.linkTitle}
          // type="button"
          css={css`
            padding: 10px;
            text-decoration: none;
            background-color: #cc3a3d;
            color: white;
            border-radius: 5px;
            &:hover {
              transform: translateY(-1px);
              background-color: #ff6d70;
              color: white;
            }
          `}
        >
          {props.linkText}
        </Link>
      )}
    </div>
  );
};

export default HowCanHelp;
