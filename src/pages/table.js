/** @jsx jsx */
import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";
import Paypal from "../components/Paypal";
import { css, jsx } from "@emotion/core";

class Table extends React.Component {
  // loads our paypal script
  // componentDidMount() {
  //   const script = document.createElement("script");

  //   script.src = "https://www.paypal.com/sdk/js?client-id=sb";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }

  render() {
    const onSuccess = payment => console.log("Successful payment!", payment);
    const onError = error =>
      console.log("Erroneous payment OR failed to load script!", error);
    const onCancel = data => console.log("Cancelled payment!", data);

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
          To purchase a table please fill out the fields below and then use the
          PayPal button to make your payment. The 'Table Captain' is the primary
          point-of-contact and the company information is used for sponsorship
          purposes
        </p>
        <Paypal />
      </Layout>
    );
  }
}
export default Table;
