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
        <SEO title="Purchase a Table" description="Help out by sponsoring a table, or donating to our charity." />
        {/* <Underlined>
          <h1>2020 Charity Dinner and Auction</h1>
        </Underlined> */}

        <UpcomingEvents {...LMF2020} style={{ marginBottom: `2rem` }} />
        <hr />
        <Underlined>
          <h2>Purchase a Table & Sponsorship Opportunities</h2>
        </Underlined>
        <p>
          To purchase a table and/or one of our sponsored items at our upcoming
          event please fill out the form below. We use Paypal to securely
          process your payment. Clicking the PayPal button will take you to the
          Paypal website to complete the payment. The 'Table Captain' will be
          our the primary point-of-contact and the company information will be
          used for sponsorship purposes.
        </p>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        ></div>
        <Paypal />
      </Layout>
    );
  }
}
export default Table;
