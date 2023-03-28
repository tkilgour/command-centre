import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    OneSignal.init({
      appId: "e8472fa1-f22c-4943-8147-ce9ba1407c2c",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,
    });
  }, []);
  return <Component {...pageProps} />;
}
