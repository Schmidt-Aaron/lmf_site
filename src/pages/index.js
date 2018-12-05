import React from "react";
import Layout from "../components/homeLayout";
import Hero from "../components/Hero";
import HowHelp from "../components/HowHelp";
import WhoAre from "../components/WhoAre";
import UpcomingEvents from "../components/UpcomingEvents";

export default () => (
  <Layout>
    <Hero />
    <section
      style={{ padding: `1.5rem 3rem`, margin: `2rem auto`, maxWidth: 1200 }}
    >
      <WhoAre />
      <HowHelp />
      <UpcomingEvents />
    </section>
  </Layout>
);
