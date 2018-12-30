/** @jsx jsx */
import React from "react";
import SidebarHowHelp from "./SidebarHowHelp";
import { css, jsx } from "@emotion/core";

const Sidebar = () => {
  return (
    <div css={{ textAlign: `center` }}>
      <SidebarHowHelp style={{ display: `block`, flexDirection: `column` }} />
    </div>
  );
};

export default Sidebar;
