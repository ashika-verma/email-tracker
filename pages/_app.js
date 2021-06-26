import * as React from "react";

import { Global } from "@emotion/react";

import App from "next/app";
import injectGlobalStyles from "~/common/styles/global";
import HeadMeta from "../components/HeadMeta";

function MyApp({ Component, pageProps }) {
  const description =
    "Take a transparent 1x1 png and throw it into your email signature. See when that email signature has been rendered on the recipient's email client and use this to your advantage!";
  const url = "https://github.com/ashika-verma/email-tracker";
  return (
    <React.Fragment>
      <Global styles={injectGlobalStyles()} />
      <HeadMeta title={"Email Tracker"}></HeadMeta>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
