import {
  AsideContainer,
  Container,
  ContainerBody,
  ContainerHeader,
} from "./styles";

import { Kpis } from "@/components/Kpis";

import { Heading } from "@enline-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <ContainerHeader>
          <Heading as="h2">Header</Heading>
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
