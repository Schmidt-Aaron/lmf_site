import React from "react";
import Header from "../components/Header";

const PartnerImage = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <img
      src={props.imgURL}
      alt={props.altText}
      description={props.description}
    />
  </a>
);

export default () => (
  <main style={{ color: `teal` }}>
    <Header headerText="LMF Partners" />
    <h1>Light My Fire Partners</h1>
    <p>
      Support from Puget Sound area businesses is critical to our success, so
      we’ll highlight those partners that work with us. When contacting any of
      our business partners, be sure to tell them that you found them through
      their support of Light My Fire of Puget Sound.If you would like to see
      your business featured here, please contact us for more information on how
      to make it happen!
    </p>
    <div>
      <p>Partner Images go here</p>
    </div>
  </main>
);
