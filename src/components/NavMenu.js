/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";
import BurgerMenu from "./BurgerMenu";

// paypal link
const donate =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=david%40dlsrestore%2ecom&lc=US&item_name=Light%20My%20Fire%20Puget%20Sound&no_note=0&cn=Thank%20You%20for%20Your%20Support%21&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";

// facebook link
const facebook = "https://www.facebook.com/lightmyfireps";
const ListLink = props => (
  <li
    css={{
      display: `inline-block`,
      marginRight: `1rem`
    }}
  >
    <Link to={props.to} css={{ textDecoration: `none` }}>
      {props.children}
    </Link>
  </li>
);

// used on every page

class NavMenu extends React.Component {
  state;
}
export default () => (
  <nav>
    <ul
      css={css`
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        @media (max-width: 970px) {
          display: none;
        }
      `}
    >
      <ListLink to="/about">About</ListLink>
      <ListLink to="/partners">Partners</ListLink>
      <ListLink to="/events">Events</ListLink>
      <ListLink to="/contact">Contact</ListLink>
      <ListLink to="/help">Help Out</ListLink>
      <li
        css={{
          display: `inline-block`,
          marginRight: `1rem`
        }}
      >
        <a
          css={css`
            position: relative;
            top: 6px;
          `}
          href={facebook}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            css={css`
              fill: #3c5a99;
              &:hover {
                fill: #5475bc;
              }
            `}
            // fill="blue" change this to be :hover
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
          </svg>
        </a>
      </li>
      <li
        css={{
          display: `inline-block`,
          marginRight: `1rem`
        }}
      >
        <a
          href={donate}
          css={
            css`
              padding: 10px;
              text-decoration: none;
              background-color: #cc3a3d;
              color: white;
              border-radius: 5px;
              &:hover {
                background-color: #ff6d70;
                color: white;
              }
            `
            // textDecoration: `none`,
            // color: `#bd1014`,
            // textTransform: `uppercase`,
            // fontSize: `1.1rem`
          }
        >
          Donate!
        </a>
      </li>
    </ul>
    <BurgerMenu right />
  </nav>
);
