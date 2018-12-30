import React from "react";
import Layout from "../components/layouts/layout";
import Mission from "../components/Mission";
import Board from "../components/Board";
import Chairman from "../components/Board/ChairmanLetter";

export default () => (
  <Layout>
    <Mission />
    <Chairman />
    <Board />
  </Layout>
);
