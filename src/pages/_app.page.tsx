import { Header } from "@/components/Header";
import { SideBar } from "@/components/SIdeBar";
import { globalStyles } from "@/styles/global";

import type { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main style={{ display: "flex" }}>
        <SideBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
