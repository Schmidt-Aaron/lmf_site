import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

export default () => {
  return (
    <Layout>
      <SEO
        title="Page Not Found / 404"
        description="You seem to be lost. Don't worry, be happy!"
      />
      <section>
        <h1>Oops, something seems to be amiss here.</h1>
        <p>Don't worry! We will get you home in no time.</p>
        <Link to="/">Go Home &rarr;</Link>
      </section>
    </Layout>
  );
};
