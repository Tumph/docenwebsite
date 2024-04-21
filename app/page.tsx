import Image from "next/image";
import { VortexHero } from "./VortexHero";
import Navbar from "@/components/ui/navbar";
import HomeDescription from "./HomeDescription";
import CardSection from "./CardSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <VortexHero />
      <HomeDescription />
      <CardSection />
    </main>
  );
}
