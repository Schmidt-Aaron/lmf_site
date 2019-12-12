import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

export default ({ location }) => {
  let payer = "";
  location.state ? (payer = " " + location.state.payer) : null;
  return (
    <Layout>
      <SEO title="You Rock!!" />
      <section>
        <h1>Thanks{payer}!</h1>
        <p>
          A receipt for your table purchase has been emailed to you. You can
          also log into your PayPal account to view the transaction details.
        </p>
        <p>
          If there are any questions about your receipt or if you want more
          details about the upcoming event please email Rob France at
          rob@lmfps.org.
        </p>
        <p>
          Thanks again for your support. We can't wait to see you in April!!
        </p>
      </section>
    </Layout>
  );
};
