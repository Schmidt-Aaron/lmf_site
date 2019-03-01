import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import PastEvents from "../components/PastEvents";
import { Underlined } from "../components/styles";

export default () => (
  <Layout>
    <Underlined>
      <h1>Events</h1>
    </Underlined>
    <p>
      We do a variety of events throughout the year. We will post some photos &
      highlight information for these events. You can also find other photos and
      information on our Facebook account.
    </p>
    <UpcomingEvents style={{ marginBottom: `2rem` }} />
    <hr />
    <hr />
    <Underlined>
      <h2>Past Event Highlights</h2>
    </Underlined>
    <p>
      We do a variety of events throughout the year. We will post some photos &
      highlight information for these events. You can also find other photos and
      information on our Facebook account.
    </p>
    <PastEvents style={{ marginBottom: `2rem` }} />
  </Layout>
);
