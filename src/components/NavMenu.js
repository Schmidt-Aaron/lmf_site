/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";
import BurgerMenu from "./BurgerMenu";
import { colors } from "../utils/theme";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

// paypal link
const donate =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=david%40dlsrestore%2ecom&lc=US&item_name=Light%20My%20Fire%20Puget%20Sound&no_note=0&cn=Thank%20You%20for%20Your%20Support%21&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";

// facebook link
const facebook = "https://www.facebook.com/lightmyfireps";
const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link
      to={props.to}
      css={css`
        text-decoration: none;
        color: ${colors.black};
      `}
      activeStyle={{ color: `${colors.darkRed}` }}
      partiallyActive={true}
    >
      {props.children}
    </Link>
  </li>
);

// used on every page

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
      <ListLink to="/board">Board</ListLink>
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
            color: #3c5a99;
            transition: all 0.3s;
            &:hover {
              color: #5475bc;
            }
          `}
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{ size: "2rem", style: { verticalAlign: "middle" } }}
          >
            <FaFacebookSquare />
          </IconContext.Provider>
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
          css={css`
            padding: 10px;
            text-transform: uppercase;
            text-decoration: none;
            background-color: ${colors.darkRed};
            color: white;
            border-radius: 5px;
            transition: all 0.3s;
            &:hover {
              background-color: ${colors.mediumRed};
              color: white;
            }
          `}
        >
          Donate!
        </a>
      </li>
    </ul>
    <BurgerMenu right />
  </nav>
);
