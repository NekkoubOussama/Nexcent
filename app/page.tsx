import Body from "@/components/body/body";
import Frame16 from "@/components/footer/frame16";
import Hero from "@/components/body/hero";
import Community from "@/components/body/community";
import Clients from "@/components/body/ourclient";

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
