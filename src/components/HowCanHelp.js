/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";

const HowCanHelp = props => {
  return (
    <div
      style={{
        display: `flexbox`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        border: `1px black solid`,
        padding: `1rem`,
        textAlign: `center`,
        margin: `0.5rem 0`
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.innerText}</p>
      <Link to={props.link}>{props.linkText}</Link>
    </div>
  );
};

export default HowCanHelp;
