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
        maxWidth: `100%`,
        minHeight: `100vh`,
        display: `flex column`,
        alignSelf: `center`,
        // maxWidth: 1600,
        // margin: `0 auto`
        padding: `0`,
        margin: `0`
        // gridGap: `10px`,
        // gridTemplateRows: `100px auto max-content`
      }}
    >
      <Header
        style={{
          width: `100vw`,
          height: `100px`,
          margin: `0 auto`,
          borderBottom: `3px solid red`
        }}
      />
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `auto 300px`,
          gridRow: `2/3`,
          gridColumn: `1/3`,
          padding: `1.5rem 3rem`,
          margin: `2rem auto`,
          maxWidth: 1200
        }}
      >
        <main
          style={{
            justifySelf: `start`,
            paddingRight: `2rem`,
            gridColumn: `1/2`
          }}
        >
          {children}
        </main>
        <aside style={{ gridColumn: `2/3` }}>
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  </Global>
);
