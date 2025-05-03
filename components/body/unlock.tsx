import React from "react";
import Image from "next/image";
import rafiki from "../../public/rafiki.svg";
import Button from "../button";

export default function Unlock() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-13 w-[80%] mx-auto ">
      <Image src={rafiki} alt="image rafiki" />
      <div className=" lg:pr-15 max-w-[661px] w-full">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p className=" text-Regularbody3 pt-2 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button intent={"primary"} size={"medium"}>
          Learn More
        </Button>
      </div>
    </div>
  );
}
