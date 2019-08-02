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
    width: "30px",
    height: "30px",
    // width: "100px",
    // height: "100px",
    right: "40px",
    top: "40px"
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

//  code below not used currently - custom burger menu
// class FancyIcon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       closed: true
//     };
//     this.triggerAnimation = this.triggerAnimation.bind(this);
//   }

//   triggerAnimation = e => {
//     // !this.state.closed
//     //   ? this.setState({
//     //       closed: false
//     //     })
//     //   : this.setState({
//     //       closed: true
//     //     });
//     console.log("triggered");
//     this.setState({
//       closed: false
//     });
//   };

//   render() {
//     return (
//       <div
//         className="burgerBody"
//         css={css`
//           align-items: center;
//           display: flex;
//           height: 100%;
//           justify-content: center;
//           margin: 0;
//           overflow: hidden;
//           position: absolute;
//           width: 100%;
//         `}
//         onClick={this.triggerAnimation}
//       >
//         <svg
//           className=""
//           css={css`
//             cursor: pointer;
//             -webkit-tap-highlight-color: transparent;
//             transition: transform 400ms;
//             -moz-user-select: none;
//             -webkit-user-select: none;
//             -ms-user-select: none;
//             user-select: none;

//             .activate {
//               transform: rotate(45deg);
//             }
//           `}
//           viewBox="0 0 100 100"
//           width="80"
//         >
//           <Line
//             className="top"
//             css={css`
//               stroke-dasharray: 40 121;
//               .active {
//                 stroke-dashoffset: -68px;
//               }
//             `}
//             d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
//           />
//           <Line css={css``} className="middle" d="m 70,50 h -40" />
//           <Line
//             css={css`
//               stroke-dasharray: 40 121;
//               .active {
//                 stroke-dashoffset: -68px;
//               }
//             `}
//             className="bottom"
//             d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
//           />
//         </svg>
//       </div>
//     );
//   }
// }

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
          styles={styles}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          // customBurgerIcon={<FancyIcon />}
        >
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
