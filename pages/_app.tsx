import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "e8472fa1-f22c-4943-8147-ce9ba1407c2c",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      <Component {...pageProps} />;
    </>
  );
}
