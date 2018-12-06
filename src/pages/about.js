import React from "react";
import Layout from "../components/layouts/layout";
import WhoAre from "../components/WhoAre";
import Board from "../components/Board";
import Chairman from "../components/Board/ChairmanLetter";

export default () => (
  <Layout>
    <WhoAre />
    <Chairman />
    <Board />
  </Layout>
);
