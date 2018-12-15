/** @jsx jsx */
import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { css, jsx } from "@emotion/core";

//  standard layout for every page except homepage

export default ({ children }) => (
  <Global>
    <div
      css={{
        width: `100vw`,
        maxWidth: `100%`,
        minHeight: `100vh`,
        display: `flex column`,
        alignSelf: `center`,
        // maxWidth: 1600,
        // margin: `0 auto`
        padding: `0`,
        margin: `0`
        // gridGap: `10px`,
        // gridTemplateRows: `100px auto max-content`
      }}
    >
      <Header
        css={{
          width: `100vw`,
          height: `100px`,
          margin: `0 auto`
        }}
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
          grid-row: 1;
          padding: 1.5rem 3rem;
          margin: 2rem auto;
          max-width: 1200px;
          @media (max-width: 970px) {
            grid-row: 1;
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
