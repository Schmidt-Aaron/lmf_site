import React from "react";
import Layout from "../components/homeLayout";
import Hero from "../components/Hero";
import HowHelp from "../components/HowHelp";
import WhoAre from "../components/WhoAre";
import UpcomingEvents from "../components/UpcomingEvents";

export default () => (
  <Layout>
    <Hero />
    <WhoAre />
    <HowHelp />
    <UpcomingEvents />
  </Layout>
);
