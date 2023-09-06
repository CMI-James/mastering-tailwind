import "@/styles/globals.css";
import "../styles/home.scss";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
