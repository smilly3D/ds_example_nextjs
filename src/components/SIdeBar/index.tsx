import { Container } from "./styles";

import { Heading, Button } from "@enline-ui/react";
import {
  Broadcast,
  ChartLine,
  Cube,
  Faders,
  Gauge,
  Lifebuoy,
  MapTrifold,
  Warning,
} from "@phosphor-icons/react";

export const SideBar = () => (
  <Container>
    <Heading>Company</Heading>
    <hr />
    <>
      <Button variant={"primaryLeftBar"}>
        <Gauge size={32} />
        Cockpit
      </Button>
      <Button variant={"primaryLeftBar"}>
        <Cube size={32} />
        Digital Twin
      </Button>
      <Button variant={"primaryLeftBar"}>
        <MapTrifold size={32} />
        Maps
      </Button>
      <Button variant={"primaryLeftBar"}>
        <ChartLine size={32} />
        Data Analisys
      </Button>
      <Button variant={"primaryLeftBar"}>
        <Warning size={32} />
        Alerts
      </Button>
      <Button variant={"primaryLeftBar"}>
        <Broadcast size={32} />
        Fault location
      </Button>
    </>

    <>
      <Button variant={"primaryLeftBar"}>
        <Faders size={32} />
        Settings
      </Button>
      <Button variant={"primaryLeftBar"}>
        <Lifebuoy size={32} />
        Need help?
      </Button>
    </>
  </Container>
);
