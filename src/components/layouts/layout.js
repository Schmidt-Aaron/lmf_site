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
        // style={{
        //   display: `grid`,
        //   gridTemplateColumns: `auto 300px`,
        //   gridRow: `2/3`,
        //   gridColumn: `1/3`,
        //   padding: `1.5rem 3rem`,
        //   margin: `2rem auto`,
        //   maxWidth: 1200
        // }}
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
        `}
      >
        <main
          css={css`
            justify-self: start;
            padding-right: 2rem;
            grid-column: 1/2;
            @media (max-width: 970px) {
              margin-top: 100px;
              grid-row: 1;
              grid-column: span 2;
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
