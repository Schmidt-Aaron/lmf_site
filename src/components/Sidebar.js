/** @jsx jsx */
import React from "react";
import SidebarHowHelp from "./SidebarHowHelp";
import { css, jsx } from "@emotion/core";

const Sidebar = () => {
  return (
    <div
      css={css`
        padding: 0 1rem;
        text-align: center;
      `}
    >
      <SidebarHowHelp style={{ display: `block`, flexDirection: `column` }} />
    </div>
  );
};

export default Sidebar;
