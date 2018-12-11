import React from "react";
import { Link } from "gatsby";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

// paypal link
const donate =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=david%40dlsrestore%2ecom&lc=US&item_name=Light%20My%20Fire%20Puget%20Sound&no_note=0&cn=Thank%20You%20for%20Your%20Support%21&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";

// facebook link
const facebook = "https://www.facebook.com/lightmyfireps";
const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`
    }}
  >
    <Link to={props.to} style={{ textDecoration: `none` }}>
      {props.children}
    </Link>
  </li>
);

// used on every page

class NavMenu extends React.Component {
  state;
}
export default () => (
  <nav style={{ paddingTop: `1rem`, display: `flex` }}>
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/highlights">Highlights</ListLink>
      <ListLink to="/partners">Partners</ListLink>
      <ListLink to="/events">Events</ListLink>
      <ListLink to="/contact">Contact</ListLink>
      <ListLink to="/help">Help</ListLink>
    </ul>
    <a href={facebook} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
      </svg>
    </a>
    <a href={donate}>
      <Button>Donate!</Button>
    </a>
  </nav>
);
