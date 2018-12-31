/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const ListLink = props => (
  <li
    css={{
      marginRight: `1rem`
    }}
  >
    <Link to={props.to} css={{ textDecoration: `none` }} className="menu-item">
      {props.children}
    </Link>
  </li>
);

class burgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        css={css`
          @media (min-width: 970px) {
            display: none;
          }
        `}
      >
        <Menu styles={styles} right>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/partners">Partners</ListLink>
          <ListLink to="/events">Events</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/help">Help</ListLink>
        </Menu>
      </div>
    );
  }
}

export default burgerMenu;
