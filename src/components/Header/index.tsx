import {
  HeaderContainer,
  HeaderRealtime,
  HeaderUserMenu,
  HeaderWraper,
} from "./styles";

import logo from "../../Assets/logo-white.svg";
import { DateTimeWatch } from "../DateTimeWatch";

import { Avatar } from "@enline-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        <HeaderWraper>
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
            src={logo}
            alt="logo"
            width={95}
            height={25}
          />
          <HeaderRealtime size={"xs"}>
            <DateTimeWatch />
          </HeaderRealtime>
        </HeaderWraper>
        <HeaderWraper>
          <Avatar
            src="https://files-enline-dev.s3.amazonaws.com/company-logo/MMG.png"
            containerProps={{ avatarType: "rounded" }}
          />
          <HeaderUserMenu as="strong" size={"sm"}>
            Hello, Andre da MMG
          </HeaderUserMenu>
        </HeaderWraper>
      </HeaderContainer>
    </>
  );
};
