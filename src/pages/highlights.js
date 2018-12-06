import React from "react";
import Layout from "../components/layouts/layout";
import PastEvents from "../components/PastEvents";

export default () => (
  <Layout>
    <h1>Our Highlights</h1>
    <p>
      We do a variety of events throughout the year. We will post some photos &
      highlight information for these events. You can also find other photos and
      information on our Facebook account.
    </p>
    <PastEvents style={{ marginBottom: `2rem` }} />
    <p>add highlights</p>
  </Layout>
);
