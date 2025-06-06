import type React from "react";
import { Inter } from "next/font/google";
import Hero from "./home";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
