import React from "react";
import SidebarHowHelp from "./SidebarHowHelp";

const Sidebar = () => {
  return (
    <div style={{ border: `solid 1px black` }}>
      <SidebarHowHelp style={{ display: `block`, flexDirection: `column` }} />
    </div>
  );
};

export default Sidebar;
