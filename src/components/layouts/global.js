import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

// global effects; used in other layouts as parent wrapper
export default ({ children }) => (
  <React.Fragment>
    {/* <MuiThemeProvider> */}
    <CssBaseline>{children}</CssBaseline>
    {/* </MuiThemeProvider> */}
  </React.Fragment>
);
