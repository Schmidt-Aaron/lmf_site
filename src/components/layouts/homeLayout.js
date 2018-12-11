import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";

// homepage layout

export default ({ children }) => (
  <Global>
    <div style={{ width: `100vw`, minHeight: `100vh`, display: `grid` }}>
      <Header />
      <main
        style={{
          justifySelf: `start`,
          margin: `0 0 2rem`
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  </Global>
);
