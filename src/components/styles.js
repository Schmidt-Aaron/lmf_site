/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// commonly used styled components go here

// underline style for headings
export const Underlined = ({ children }) => {
  return (
    <div
      css={css`
        display: inline-block;
      `}
    >
      {children}
      <hr
        css={css`
          position: relative;
          top: -43px;
          background: #ffc4c7;
          height: 10px;
          z-index: -1;
          transform: scaleX(1.05);
          margin-bottom: 0;
        `}
      />
    </div>
  );
};

export const Wrapper = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
};
