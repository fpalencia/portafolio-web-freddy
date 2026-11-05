import { CustomCursor } from "@/components/ui/CustomCursor";
import { MuralMotion } from "@/components/motion/MuralMotion";
import { SiteNav } from "@/components/sections/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { HowIThink } from "@/components/sections/HowIThink";
import { WhereIWorked } from "@/components/sections/WhereIWorked";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <MuralMotion>
      <CustomCursor />
      <SiteNav />
      <main>
        <Hero />
        <WhatIDo />
        <HowIThink />
        <WhereIWorked />
      </main>
      <Closing />
    </MuralMotion>
  );
}
