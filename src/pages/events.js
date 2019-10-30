/** @jsx jsx */
import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import PastEvents from "../components/PastEvents";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import data, { PSAAHoliday2019 } from "../components/data/events";

// const TableLink = styled.Link`
//   padding: 1rem;
//   background-color: #cc3a3d;
//   color: white;
//   border-radius: 5px;
// `;

export default () => (
  <Layout>
    <SEO title="Events" />
    <Underlined>
      <h1>Events</h1>
    </Underlined>
    <p>
      We do a variety of events throughout the year. We will post some photos &
      highlight information for these events. You can also find other photos and
      information on our Facebook account.
    </p>
    <Underlined>
      <h2>Upcoming Events</h2>
    </Underlined>
    <UpcomingEvents style={{ marginBottom: `2rem` }} {...data} />
    <p>
      * Please send us a digital copy of your logo if you have purchased a
      table. You are also welcome to use your own branded tablecloths for your
      table. *
    </p>
    <Link
      to="/table"
      css={css`
        display: grid;
        padding: 0.5rem;
        margin: 1rem auto 3rem;
        text-align: center;
        background-color: #cc3a3d;
        color: white;
        border-radius: 5px;
        transition: all 0.3s;
        &:hover {
          transform: translateY(-1px);
          background-color: #ff6d70;
          color: white;
        }
      `}
    >
      Purchase a Table
    </Link>
    <hr />
    <UpcomingEvents {...PSAAHoliday2019} />
    <p>
      For more information about the event and instructions on how to register
      or become a sponser:{" "}
      <a href="http://pugetsoundadjusters.org/attachments/stashed_files/PSAA_2019_Holiday_Party_Registration_and_Vendor_Sponsorships.pdf">
        Event Flyer
      </a>{" "}
    </p>
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
