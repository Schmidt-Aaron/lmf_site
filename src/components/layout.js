import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <div
    style={{
      width: `100vw`,
      minHeight: `100vh`,
      display: `grid`,
      gridTemplateRows: ` 100px 80% 200px`
    }}
  >
    <Header style={{ gridRow: `1/2` }} />
    <main
      style={{
        maxWidth: 1200,
        justifySelf: `start`,
        margin: `0`,
        padding: `1.25rem 1rem`,
        paddingTop: `3rem`,
        gridRow: `2/3`
      }}
    >
      {children}
    </main>
    <Footer style={{ gridRow: `3/3` }} />
  </div>
);
