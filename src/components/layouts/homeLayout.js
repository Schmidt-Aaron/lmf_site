/** @jsx jsx */
import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";
import { css, jsx } from "@emotion/core";
// homepage layout

export default ({ children }) => (
  <Global>
    <div
      css={css`
        width: 100vw;
        max-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      <Header />
      <main
        css={css`
          justify-self: start;
          margin: 0 0 2rem;
          text-align: center;
          @media (max-width: 970px) {
            margin-top: 100px;
          }
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  </Global>
);
