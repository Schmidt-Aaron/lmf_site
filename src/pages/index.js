import React from "react";
import Layout from "../components/homeLayout";
import Hero from "../components/Hero";
import HowHelp from "../components/HowHelp";

export default () => (
  <Layout>
    <Hero />
    <section style={{ padding: `2rem` }}>
      <p>
        In the Seattle area alone, there are around 400 home fires every year.
        Immediately following these tragedies, many families are left homeless
        with no place to go. Light My Fire helps local fire departments by
        gathering donations. These donations are then used by local fire
        fighters to help families find temporary housing, food, water, and other
        essentials immediately following a home fire. Established in 2014, LMF
        (Light My Fire) of Puget Sound was organized in an effort to help
        families affected by fire damage in the western Washington area.
      </p>
    </section>
    <HowHelp />
  </Layout>
);
