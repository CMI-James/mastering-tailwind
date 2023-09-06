
import { Inter } from "next/font/google";
import Hero from "./Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main>
    <Hero/>
  </main>;
}
