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
        display: `grid`,
        gridTemplateRows: `100px auto max-content`,

        width: `100vw`,
        minHeight: `100vh`
      }}
    >
      <Header style={{ gridRow: `1/2` }} />
      <main
        style={{
          gridTemplateColumns: `3fr 1fr`,
          maxWidth: 1200,
          justifySelf: `start`,
          margin: `0 auto`,
          padding: `1.5rem 3rem`,
          paddingTop: `3rem`,
          gridRow: `2/3`,
          gridColumn: `1/3`,
          display: `grid`
        }}
      >
        {children}
        <aside>
          <Sidebar style={{ gridRow: `2/3`, gridColumn: `2/3` }} />
        </aside>
      </main>
      <Footer style={{ gridRow: `3/3` }} />
    </div>
  </Global>
);
