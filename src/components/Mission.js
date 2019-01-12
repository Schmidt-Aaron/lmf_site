/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Underlined } from "./styles";

// This component is used on the homepage and the about us page

const Mission = props => {
  return (
    <section
      css={css`
        max-width: 800px;
        margin: 0 auto 5rem;
      `}
    >
      <Underlined>
        <h2>Our Mission</h2>
      </Underlined>

      <p>
        In the Seattle area alone, there are around 400 home fires every year.
        Immediately following these tragedies, many families are left homeless
        with no place to go. Light My Fire helps local fire departments by
        gathering donations. These donations are then used by local fire
        fighters to help families find temporary housing, food, water, and other
        essentials immediately following a home fire. Established in 2014, LMF
        (Light My Fire) of Puget Sound was organized in an effort to help
        families affected by fire damage in the western Washington area.
      </p>
    </section>
  );
};
export default Mission;
