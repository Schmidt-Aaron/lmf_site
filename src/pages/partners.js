import React from "react";
import Layout from "../components/layouts/layout";
import Partners from "../components/Partners";
import { Underlined } from "../components/styles";

export default () => (
  <Layout>
    <Underlined>
      <h1>Light My Fire Partners</h1>
    </Underlined>
    <p>
      Support from Puget Sound area businesses is critical to our success, so
      we’ll highlight those partners that work with us. When contacting any of
      our business partners, be sure to tell them that you found them through
      their support of Light My Fire of Puget Sound. If you would like to see
      your business featured here, please contact us for more information on how
      to make it happen!
    </p>
    <div>
      <Partners />
    </div>
  </Layout>
);
