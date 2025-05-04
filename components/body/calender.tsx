import React from "react";
import Image from "next/image";
import Pana from "../../public/pana.svg";
import Button from "../button";

export default function Calender() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-[80%] mx-auto">
      <Image src={Pana} alt={"Image"} />
      <div className="lg:pr-15 max-w-[661px] w-full pt-2">
        <h2 className="text-d_grey">
          How to design your site footer like we did
        </h2>
        <p className="text-Regularbody3 text-grey py-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button size={"medium"} intent={"primary"}>
          Learn More
        </Button>
      </div>
    </div>
  );
}
