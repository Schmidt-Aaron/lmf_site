import React from "react";
import DaveMataftin from "./Board/DaveMataftin";
import DavidKean from "./Board/DavidKean";
import DianeSalz from "./Board/DianeSalz";
import JeremyKennard from "./Board/JeremyKennard";
import RobertFrance from "./Board/RobertFrance";
import RyanJensen from "./Board/RyanJensen";

//  board members imported from  ../Board; used on About

const Board = () => {
  return (
    <section>
      <h2>Board of Directors</h2>
      <DaveMataftin />
      <DavidKean />
      <DianeSalz />
      <JeremyKennard />
      <RobertFrance />
      <RyanJensen />
    </section>
  );
};

export default Board;
