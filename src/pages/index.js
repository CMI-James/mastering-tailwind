
import { Inter } from "next/font/google";
import Hero from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main>
    <Hero/>
  </main>;
}
