"use client";

import "@/styles/globals.css";
import "../styles/home.scss";
import { useState } from "react";
import Layout from "./Layout";
import type { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  Component: AppProps["Component"] & {
    pageProps: any;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<boolean>(true);

  return (
    <Layout setMode={setMode} mode={mode}>
      <Component {...pageProps} setMode={setMode} mode={mode} />
    </Layout>
  );
}
