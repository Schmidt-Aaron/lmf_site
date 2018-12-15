import React from "react";
import SidebarHowHelp from "./SidebarHowHelp";

const Sidebar = () => {
  return (
    <div style={{ textAlign: `center` }}>
      <SidebarHowHelp style={{ display: `block`, flexDirection: `column` }} />
    </div>
  );
};

export default Sidebar;
