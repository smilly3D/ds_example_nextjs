import {
  AsideContainer,
  Container,
  ContainerBody,
  ContainerHeader,
} from "./styles";

import { Kpis } from "@/components/Kpis";

import { Heading, Switch, Text } from "@enline-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <ContainerHeader>
          <div
            style={{
              width: "fit-content",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                border: "1px solid red",
                padding: "0.5rem 1rem",
                display: "flex",
                gap: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <Switch /> <Text size={"xs"}>Circuit 1</Text>
              <Switch /> <Text size={"xs"}>Circuit 2</Text>
            </div>
          </div>
        </ContainerHeader>
        <ContainerBody>
          <Heading as="h2">Body</Heading>
        </ContainerBody>
        <AsideContainer>
          <Kpis />
        </AsideContainer>
      </Container>
    </>
  );
}
