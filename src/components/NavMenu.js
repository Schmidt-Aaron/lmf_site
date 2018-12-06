import React from "react";
import { Link } from "gatsby";

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

export default () => (
  <nav>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/highlights">Highlights</ListLink>
      <ListLink to="/partners">Partners</ListLink>
      <ListLink to="/events">Events</ListLink>
      <ListLink to="/contact">Contact</ListLink>
      <ListLink to="/donate">Donate!</ListLink>
    </ul>
  </nav>
);
