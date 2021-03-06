import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="Thanks for your submission!" />
      <section>
        <h1>Thanks for reaching out!</h1>
        <p>Your submission has been received.</p>
        <p>
          We will get back to you as soon as we can. Responses are typically
          sent Monday - Friday during business hours.
        </p>
        <p>Thanks again for your interest!</p>
      </section>
    </Layout>
  );
};
