/** @jsx jsx */
import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { css, jsx } from "@emotion/core";
import backgroundTexture from "../../../static/images/asfalt-dark.png";

//  standard layout for every page except homepage

export default ({ children }) => (
  <Global>
    <div
      css={css`
        width: 100vw;
        max-width: 100%;
        min-height: 100vh;
        display: grid;
        align-self: center;
        padding: 0;
        margin: 0;
        grid-template-rows: min-content auto max-content;
      `}
    >
      <Header
        css={css`
          width: 100vw;
          height: 100px;
          margin: 0 auto;
          grid-row: 1;
        `}
      />
      <div
        css={css`
          display: grid;
          grid-template-columns: auto 300px;
          grid-column: 1/3;
          grid-row: 2;
          padding: 1.5rem 3rem;
          margin: 2rem auto;
          max-width: 1200px;
          /* background: url(../../../static/images/asfalt-dark.png) repeat; */
          @media (max-width: 970px) {
            grid-row: 2;
            grid-column: span 2;
          }
          @media (max-width: 670px) {
            margin: 3rem 0 0;
            padding: 0;
          }
        `}
      >
        <main
          css={css`
            justify-self: start;
            padding-right: 2rem;
            grid-column: 1/2;
            margin-bottom: 2rem;
            @media (max-width: 970px) {
              margin-top: 100px;
              grid-row: 1;
              grid-column: span 2;
              margin-bottom: 3rem;
            }
            @media (max-width: 670px) {
              padding: 0 2rem;
            }
          `}
        >
          {children}
        </main>
        <aside
          css={css`
            grid-column: 2/3;
            @media (max-width: 970px) {
              grid-row: 2;
              grid-column: span 2;
              margin-bottom: 2rem;
              padding: 0 2rem;
            }
          `}
        >
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  </Global>
);
