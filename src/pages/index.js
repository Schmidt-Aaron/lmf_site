import React from "react";
import Layout from "../components/layouts/homeLayout";
import Hero from "../components/Hero";
import HomepageHowHelp from "../components/HomepageHowHelp";
import WhoAre from "../components/WhoAre";
import UpcomingEvents from "../components/UpcomingEvents";

export default props => (
  <Layout>
    <Hero />
    <section
      style={{ padding: `1.5rem 3rem`, margin: `2rem auto`, maxWidth: 1200 }}
    >
      <WhoAre style={{ marginBottom: `5rem` }} />
      <HomepageHowHelp style={{ marginBottom: `5rem` }} />
      <UpcomingEvents />
    </section>
  </Layout>
);
