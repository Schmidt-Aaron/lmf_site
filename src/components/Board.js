/** @jsx jsx */
import React from "react";
import DaveMataftin from "./Board/DaveMataftin";
import DianeSalz from "./Board/DianeSalz";
import JeremyKennard from "./Board/JeremyKennard";
import RobertFrance from "./Board/RobertFrance";
import { css, jsx } from "@emotion/core";
import { Underlined } from "./styles";
import TammyLamb from "./Board/TammyLamb";
import TeraRose from "./Board/TeraRose";

//  board members imported from  ../Board; used on About

const Board = props => {
  return (
    <section
      css={css`
        margin-bottom: 3rem;
      `}
    >
      <Underlined>
        <h2>Board of Directors</h2>
      </Underlined>
      <div
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
          @media (max-width: 970px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media (max-width: 570px) {
            grid-template-columns: repeat(1, 1fr);
          }
        `}
      >
        <RobertFrance img={props.rob} />
        <DaveMataftin img={props.dave} />
        <DianeSalz img={props.diane} />
        <JeremyKennard img={props.jeremy} />
        <TammyLamb img={props.tammyLamb} />
        <TeraRose img={props.teraRose} />
      </div>
    </section>
  );
};

export default Board;
