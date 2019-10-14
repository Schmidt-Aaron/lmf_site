/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { colors } from "../utils/theme";

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
          background: ${colors.underlines};
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

export const TextWrapper = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 800px;
        margin: 0 auto;
        @media (max-width: 1024px) {
          width: calc(100vw - 4rem);
        }
        @media (max-width: 768px) {
        }
        @media (max-width: 425px) {
        }
      `}
    >
      {children}
    </div>
  );
};
