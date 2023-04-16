import { Text, styled } from "@enline-ui/react";

export const HeaderContainer = styled("div", {
  height: "$12",
  background: "linear-gradient(90deg,$gradient1a 1.94%,$gradient1b 102.78%);",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 $5",
});

export const HeaderWraper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const HeaderRealtime = styled(Text, {
  lineHeight: "$short",
  background: "$blue900",
  padding: "$1 $2",
  color: "White",
  borderRadius: "$sm",
});

export const HeaderUserMenu = styled(Text, {
  color: "White",
});
