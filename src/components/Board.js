/** @jsx jsx */
import React from "react";
import DaveMataftin from "./Board/DaveMataftin";
import DavidKean from "./Board/DavidKean";
import DianeSalz from "./Board/DianeSalz";
import JeremyKennard from "./Board/JeremyKennard";
import RobertFrance from "./Board/RobertFrance";
import RyanJensen from "./Board/RyanJensen";
import { css, jsx } from "@emotion/core";

//  board members imported from  ../Board; used on About

const Board = () => {
  return (
    <section>
      <h2>Board of Directors</h2>
      <div
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: auto;
        `}
      >
        <RobertFrance />
        <DaveMataftin />
        <DavidKean />
        <DianeSalz />
        <JeremyKennard />
        <RyanJensen />
      </div>
    </section>
  );
};

export default Board;
