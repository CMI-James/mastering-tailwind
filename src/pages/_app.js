import "@/styles/globals.css";
import "../styles/home.scss";
import { useState } from "react";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(true);

  return (
    <Layout setMode={setMode} mode={mode}>
      <Component {...pageProps} setMode={setMode} mode={mode} />
    </Layout>
  );
}
