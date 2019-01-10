/** @jsx jsx */
import React from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";

// base styles for burger menu
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47",
    display: `none` // hide built in hambeuger
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    display: `none` // hide built in cross
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

//  styled path for hamburger
const Line = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
`;

const FancyIcon = props => (
  <div
    className="burgerBody test"
    css={css`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      margin: 0;
      overflow: hidden;
      position: absolute;
      width: 100%;
    `}
  >
    <svg
      className="ham hamRotate ham4"
      viewBox="0 0 100 100"
      width="80"
      onClick="this.classList.toggle('active')"
    >
      <Line
        className="top"
        css={css`
          stroke-dasharray: 40 121;
        `}
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <Line css={css``} className="middle" d="m 70,50 h -40" />
      <Line
        css={css`
          stroke-dasharray: 40 121;
        `}
        className="bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  </div>
);

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
      //   <Global
      //     styles={css`
      //   .ham {
      //     cursor: pointer;
      //     -webkit-tap-highlight-color: transparent;
      //     transition: transform 400ms;
      //     -moz-user-select: none;
      //     -webkit-user-select: none;
      //     -ms-user-select: none;
      //     user-select: none;
      //   }
      //   .hamRotate.active {
      //     transform: rotate(45deg);
      //   }
      //   .line {
      //     fill:none;
      //     transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      //     stroke:#000;
      //     stroke-width:5.5;
      //     stroke-linecap:round;
      //   }

      //   .ham4 .top {
      //     stroke-dasharray: 40 121;
      //   }
      //   .ham4 .bottom {
      //     stroke-dasharray: 40 121;
      //   }
      //   .ham4.active .top {
      //     stroke-dashoffset: -68px;
      //   }
      //   .ham4.active .bottom {
      //     stroke-dashoffset: -68px;
      //   }

      //   }
      // `}
      //   >

      <div
        css={css`
          @media (min-width: 970px) {
            display: none;
          }
        `}
      >
        <Menu
          styles={styles}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customBurgerIcon={<FancyIcon />}
        >
          <ListLink to="/about">About</ListLink>
          <ListLink to="/partners">Partners</ListLink>
          <ListLink to="/events">Events</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/help">Help</ListLink>
        </Menu>
      </div>
    );
    {
      /* </Global> */
    }
  }
}

export default burgerMenu;
