import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <div
    style={{
      display: `grid`,
      gridTemplateRows: `100px auto max-content`,
      width: `100vw`,
      minHeight: `100vh`
    }}
  >
    <Header style={{ gridRow: `1/2` }} />
    <main
      style={{
        maxWidth: 1200,
        justifySelf: `start`,
        margin: `0 auto`,
        padding: `1.5rem 3rem`,
        paddingTop: `3rem`,
        gridRow: `2/3`
      }}
    >
      {children}
    </main>
    <Footer style={{ gridRow: `3/3` }} />
  </div>
);
