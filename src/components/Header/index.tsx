import {
  HeaderContainer,
  HeaderRealtime,
  HeaderUserMenu,
  HeaderWraper,
} from "./styles";
import Image from "next/image";

import logo from "../../Assets/logo-white.svg";
import { Avatar } from "@enline-ui/react";
import { useRouter } from "next/router";

import { DateTime } from "luxon";

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
            Real-time:{" "}
            {DateTime.now()
              .toFormat("MMMM dd, HH:mm ZZZZ")
              .replace("GMT", "UTC")}
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
