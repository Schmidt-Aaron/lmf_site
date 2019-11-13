import Typography from "typography";
import funstonTheme from "typography-theme-funston";
import { redirectTo } from "@reach/router";
import { colors } from "../utils/theme";

// funston theme modifications
funstonTheme.baseLineHeight = "1.625";
funstonTheme.headerWeight = "400";
funstonTheme.headerFontFamily = [
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol"
];
funstonTheme.bodyFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol"
];

funstonTheme.googleFonts = [];
//  [
//   {
//     name: "Roboto",
//     styles: ["400", "500"]
//   }
// ];

funstonTheme.overrideThemeStyles = () => ({
  a: {
    color: colors.darkRed,
    textDecoration: "none"
  },
  "a:hover": {
    color: colors.mediumRed
  }
});

funstonTheme.omitGoogleFont = true;

const typography = new Typography(funstonTheme);

// inject into head
// typography.injectStyles();

export default typography;
export const rhythm = typography.rhythm;
