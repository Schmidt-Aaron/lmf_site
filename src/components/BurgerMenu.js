/** @jsx jsx */
import React from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";
import "./burgerMenu.css";

// base styles for burger menu
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "30px",
    // width: "100px",
    // height: "100px",
    right: "40px",
    top: "40px",
    "@media(min-width: 768px)": {
      right: "30px",
      top: "30px"
    }
  },
  bmBurgerBars: {
    background: "#373a47"
    // display: `none` // hide built in hamburger
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
    // display: `none` // hide built in cross
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    fontSize: "1.15em"
  },
  bmMenuWrap: {
    top: "0"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    listStyle: "none",
    textAlign: "center"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0"
  }
};

const ListLink = props => (
  <li
    css={css`
      padding: 1rem;
      border-bottom: 1px solid;
      margin-bottom: 0;
    `}
  >
    <Link to={props.to} css={{ textDecoration: `none` }} className="menu-item">
      {props.children}
    </Link>
  </li>
);

//  styled path for hamburger
const Line = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #888;
  stroke-width: 5.5;
  stroke-linecap: round;
`;

class burgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // closes menu
  closeMenu(e) {
    this.setState({
      menuOpen: false
    });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
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
        <Menu
          // styles={styles}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          // customBurgerIcon={<FancyIcon />}
        >
          <ul
            css={css`
              display: inline-block;
              width: 100%;
              list-style: none;
              margin-left: 0;
            `}
          >
            <ListLink to="/about">About</ListLink>
            <ListLink to="/board">Board</ListLink>
            <ListLink to="/partners">Partners</ListLink>
            <ListLink to="/events">Events</ListLink>
            <ListLink to="/contact">Contact</ListLink>
            <ListLink to="/help">Help Out</ListLink>
          </ul>
        </Menu>
      </div>
    );
  }
}

export default burgerMenu;
