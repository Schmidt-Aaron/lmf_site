/** @jsx jsx */
import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";
import Paypal from "../components/Paypal";
import { css, jsx } from "@emotion/core";
import { LMF2020 } from "../components/data/events";

class Table extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Purchase a Table" />
        {/* <Underlined>
          <h1>2020 Charity Dinner and Auction</h1>
        </Underlined> */}

        <UpcomingEvents {...LMF2020} style={{ marginBottom: `2rem` }} />
        <hr />
        <Underlined>
          <h2>Purchase a Table</h2>
        </Underlined>
        <p>
          To purchase a table at our upcoming event please fill out the fields
          below and then use the PayPal button to make your payment. The 'Table
          Captain' will be our the primary point-of-contact and the company
          information will be used for sponsorship purposes.
        </p>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <span>2020 LMF Dinner Auction 1 table (10 seats) - $1000</span>
        </div>
        <Paypal />
      </Layout>
    );
  }
}
export default Table;
