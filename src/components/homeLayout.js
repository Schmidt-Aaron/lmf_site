import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <div style={{ width: `100vw`, minHeight: `100vh`, display: `grid`,
  }}>
    <Header />
    <main
      style={{
        maxWidth: 1200,
        justifySelf: `start`,
        margin: `0`,
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);
