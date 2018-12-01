import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <div style={{ width: `100vw`, display: `grid` }}>
    <Header />
    <main
      style={{
        maxWidth: 1200,
        justifySelf: `start`,
        margin: `0`,
        padding: `1.25rem 1rem`
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);
