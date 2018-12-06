import React from "react";
import Layout from "../components/layouts/layout";
import { Link } from "@reach/router";

// used on privacy page

export default () => (
  <Layout>
    <h1>Privacy Policy</h1>
    <p>
      Light My Fire of Puget sound does not collect any identifiable visitor
      data. Anonymous statistics are kept, which is standard practice for all
      websites.
    </p>
    <p>
      Any information you send to Light My Fire of Puget Sound is considered
      private and is used only for the purpose it was intended. We do not loan,
      sell or give your information out to 3rd parties. We can use that
      information to contact you if you have requested we do so.
    </p>
    <p>
      We don’t like junk email anymore than you do, so if you think you received
      any messages from us that are spam, please use the{" "}
      <Link to="/contact">contact us</Link> page to let us know about it.
    </p>
  </Layout>
);
