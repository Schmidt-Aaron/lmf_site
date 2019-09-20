/** @jsx jsx */
import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";
import Paypal from "../components/Paypal";
import { css, jsx } from "@emotion/core";

class Table extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Purchase a Table" />
        <Underlined>
          <h1>2020 Charity Dinner and Auction</h1>
        </Underlined>

        <UpcomingEvents style={{ marginBottom: `2rem` }} />
        <hr />
        <Underlined>
          <h2>Purchase a Table</h2>
        </Underlined>
        <p>
          To purchase a table at our upcoming event please fill out the fields
          below and then use the PayPal button to make your payment. The 'Table
          Captain' will be our the primary point-of-contact and the company
          information is used for sponsorship purposes at the event.
        </p>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <span>(1) Table for 2020 LMF Dinner Auction (10 seats) - $1000</span>
        </div>
        <Paypal />
      </Layout>
    );
  }
}
export default Table;
