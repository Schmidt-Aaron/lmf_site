import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./global.module.css";

// homepage layout

export default ({ children }) => (
  <Global>
    <div
      style={{
        width: `100vw`,
        maxWidth: `100%`,
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`
      }}
    >
      <Header />
      <main
        style={{
          justifySelf: `start`,
          margin: `0 0 2rem`,
          textAlign: `center`
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  </Global>
);
