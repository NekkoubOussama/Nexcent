import Body from "@/components/body/body";
import Frame16 from "@/components/footer/frame16";
import Community from "@/components/headerGlobal/community";
import Hero from "@/components/headerGlobal/hero";
import Clients from "@/components/headerGlobal/ourclient";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Community />
      <Body />
      <Frame16 />
    </div>
  );
}
