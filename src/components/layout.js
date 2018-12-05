import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <div
    style={{
      width: `100vw`,
      minHeight: `100vh`,
      display: `grid`,
      gridTemplateRows: ` 100px auto 200px`
    }}
  >
    <Header style={{ gridRow: `1/2` }} />
    <main
      style={{
        maxWidth: 1200,
        justifySelf: `start`,
        margin: `0`,
        padding: `1.5rem 3rem`,
        paddingTop: `3rem`,
        gridRow: `2/3`,
        marginBottom: ` 2rem`
      }}
    >
      {children}
    </main>
    <Footer style={{ gridRow: `3/3` }} />
  </div>
);
