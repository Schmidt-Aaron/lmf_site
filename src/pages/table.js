import React from "react";
import Layout from "../components/layouts/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";
import PaypalButton from "../components/PaypalButton";

const CLIENT = {
  sandbox: "sampleID",
  production: "xxxXXX"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

class Table extends React.Component {
  render() {
    const onSuccess = payment => console.log("Successful payment!", payment);
    const onError = error =>
      console.log("Erroneous payment OR failed to load script!", error);
    const onCancel = data => console.log("Cancelled payment!", data);

    return (
      <Layout>
        <SEO title="Purchase a Table" />
        <Underlined>
          <h1>Purchase a Table</h1>
        </Underlined>
        <p>
          We do a variety of events throughout the year. We will post some
          photos & highlight information for these events. You can also find
          other photos and information on our Facebook account.
        </p>
        <UpcomingEvents style={{ marginBottom: `2rem` }} />
        <hr />
        <hr />
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={"USD"}
          total={1000}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </Layout>
    );
  }
}
export default Table;
