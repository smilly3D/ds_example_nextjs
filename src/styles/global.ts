import { globalCss } from "@enline-ui/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontSize: "$md",

    // '@media (min-width: 768px)': {
    //   fontSize: '$lg',
    // },

    // '@media (min-width: 1000px)': {
    //   fontSize: '$xl',
    // },
  },

  body: {
    backgroundColor: "$white",
    color: "$black",
    "-webkit-font-smoothing": "antialiased",
  },
});
