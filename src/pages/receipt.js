import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

export default ({ location }) => {
  let payer = "";
  location.state ? (payer = " " + location.state.payer) : null;
  return (
    <Layout>
      <SEO title="You Rock!!" description="Thanks so much for your sponsorship. You are literally the best!"/>
      <section>
        <h1>Thanks{payer}!</h1>
        <p>
          A receipt for your purchase has been emailed to you. You can also log
          into your PayPal account to view the transaction details.
        </p>
        <p>
          If you purchased one of our sponsorship items we will contact you soon
          to arrange the details.
        </p>
        <p>
          If you have any questions about your purchase, or the event please
          email Rob France at rob@lmfps.org.
        </p>
        <p>
          Thanks again for your support. We can't wait to see you in April!!
        </p>
      </section>
    </Layout>
  );
};
