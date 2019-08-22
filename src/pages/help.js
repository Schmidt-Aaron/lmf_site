import React from "react";
import Layout from "../components/layouts/layout";
import { Link } from "gatsby";
import { Underlined } from "../components/styles";
import SEO from "../components/seo";

// paypal link
const donate =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=david%40dlsrestore%2ecom&lc=US&item_name=Light%20My%20Fire%20Puget%20Sound&no_note=0&cn=Thank%20You%20for%20Your%20Support%21&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";

export default () => {
  return (
    <Layout>
      <SEO title="How to Help" />
      <section>
        <Underlined>
          <h1>How You Can Help</h1>
        </Underlined>
        {/* <p>
          This website is under construction. Information on how to help out
          will be supplied shortly. Thanks for your patience. In the mean time
          if you have have questions you can email us at
          lightmyfireofps@gmail.com
        </p> */}
        <p>
          Their are multiple ways you can help out our cause. We accept
          donations, both monetary, and physical items that can be auctioned
          off. We are a participating charity on Amazon Smile, and we also put
          on one or more fun events each year. More info on each of these
          options are below. If there is another way that you would like to help
          out not listed here, please contact us to discuss it.
        </p>
        <h2>Donate to LMF</h2>
        <p>
          We are accepting monetary donations through{" "}
          <a href={donate}>Paypal</a>. We also accept service/material donations
          that we can auction off. If you have a service/item that you want to
          donate for our charity auction please{" "}
          <Link to="/contact">contact us</Link> to get the ball rolling.
        </p>
        <h2>Come to one of our events</h2>

        <p>
          We put on several events a year, including a charity dinner auction.
          These are always a great time and a perfect place to show your
          support, meet the people behind the scenes, and just have a good time.
          Learn about our upcoming <Link to="/events">events</Link>.
        </p>

        <h2>Amazon Smile</h2>
        <p>
          Light My Fire Puget Sound is now a participating charity on Amazon
          Smile. When you shop at{" "}
          <a href="https://smile.amazon.com/ch/46-5717849">smile.amazon.com</a>{" "}
          (or click the image in the sidebar) a small portion of your eligible
          purchases will be donated to us.{" "}
        </p>
      </section>
    </Layout>
  );
};
