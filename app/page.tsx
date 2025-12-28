"use client";

import NewHeader from "@/components/landing/NewHeader";
import NewHero from "@/components/landing/NewHero";
import BentoGrid1 from "@/components/landing/BentoGrid1";
import BentoGrid2 from "@/components/landing/BentoGrid2";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] overflow-x-hidden">
      <NewHeader />
      <NewHero />
      <BentoGrid1 />
      <BentoGrid2 />
    </main>
  );
}
