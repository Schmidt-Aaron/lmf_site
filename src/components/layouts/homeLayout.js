import React from "react";
import Footer from "../Footer";
import Header from "../Header";

// homepage layout

export default ({ children }) => (
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
);
