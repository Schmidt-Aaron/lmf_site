import React from "react";
import Layout from "../components/layouts/layout";
import { Link } from "gatsby";
import { Underlined } from "../components/styles";

// paypal link
const donate =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=david%40dlsrestore%2ecom&lc=US&item_name=Light%20My%20Fire%20Puget%20Sound&no_note=0&cn=Thank%20You%20for%20Your%20Support%21&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";

export default () => {
  return (
    <Layout>
      <section>
        <Underlined>
          <h1>How You Can Help</h1>
        </Underlined>
        <p>
          This website is under construction. Information on how to help out
          will be supplied shortly. Thanks for your patience. In the mean time
          if you have have questions you can email us at
          lightmyfireofps@gmail.com
        </p>
        <h2>Donate to LMF</h2>
        <p>
          We are accepting monetary donations through{" "}
          <a href={donate}>Paypal</a>. We also accept service/material donations
          that we can auction off. For more information on what you can do
          please <Link to="/contact">contact us</Link>.
        </p>
        <h2>Come to one of our events</h2>

        <p>
          We put on several events a year. Learn about our upcoming{" "}
          <Link to="/events">events</Link>.
        </p>

        <h2>Amazon Smile</h2>
        <p>
          Light My Fire Puget Sound is now a participating charity on Amazon
          Smile. When you shop at{" "}
          <a href="https://smile.amazon.com/ch/46-5717849">smile.amazon.com</a>{" "}
          a small portion of your purchases will be donated to us.{" "}
        </p>
      </section>
    </Layout>
  );
};
