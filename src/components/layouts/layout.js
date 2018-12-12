import React from "react";
import Global from "./global";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

//  standard layout for every page except homepage

export default ({ children }) => (
  <Global>
    <div
      style={{
        width: `100vw`,
        minHeight: `100vh`,
        display: `grid`,
        gridGap: `10px`,
        gridTemplateRows: `100px auto max-content`,
        gridTemplateColumns: `auto 300px`
      }}
    >
      <Header style={{ gridColumn: `1/3`, gridRow: `1/2` }} />
      <main
        style={{
          maxWidth: 1200,
          justifySelf: `start`,
          padding: `1.5rem 3rem`,
          paddingTop: `3rem`,
          gridRow: `2/3`,
          gridColumn: `1/2`
        }}
      >
        {children}
      </main>
      <aside style={{ gridRow: `2/3`, gridColumn: `2/3` }}>
        <Sidebar />
      </aside>
      <Footer />
    </div>
  </Global>
);
