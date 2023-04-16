import { Box, styled } from "@enline-ui/react";

export const Container = styled(Box, {
  height: "calc(100vh - $12)",
  width: "$64",
  background: "$white",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$4",
  zIndex: "1",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
});
