import Typography from "typography";
import funstonTheme from "typography-theme-funston";
import judahTheme from "typography-theme-judah";
import parnassusTheme from "typography-theme-parnassus";
import grandViewTheme from "typography-theme-grand-view";

const typography = new Typography(funstonTheme);
// const typography = new Typography(judahTheme);
// const typography = new Typography(grandViewTheme);

export default typography;
export const rhythm = typography.rhythm;
