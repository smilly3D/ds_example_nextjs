import { styled } from "@enline-ui/react";

export const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "20% 80%",
  gridTemplateAreas: `
  'header header header'
  'body body aside'
  `,
  width: "100%",
});

export const ContainerHeader = styled("header", {
  gridArea: "header",
  background: "$gray100",
  width: "100%",
});

export const ContainerBody = styled("main", {
  gridArea: "body",
  background: "$gray100",
  width: "100%",
});

export const AsideContainer = styled("aside", {
  gridArea: "aside",
  background: "$blue100",
  color: "$white",
  width: "100%",
});
