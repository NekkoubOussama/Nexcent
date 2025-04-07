import React from "react";
import Image from "next/image";
import Illustration from "../../public/Illustration.svg";
import Button from "../button";

export default function Hero() {
  return (
    <section className="pb-[6rem] pt-[11.5rem] flex justify-between px-[9rem] ">
      <div className="flex flex-col justify-center animate-fade-in ">
        <h1 className=" text-d_grey">
          Lessons and insights <br />
          <span className=" text-primary">from 8 years</span>
        </h1>
        <p className="text-Regularbody2 text-grey pt-[1rem] pb-[2rem]">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button intent={"primary"} size={"medium"}>
          Register
        </Button>
      </div>
      <Image
        src={Illustration}
        alt="Picture"
        quality={100}
        className=" animate-fade-right"
      />
    </section>
  );
}
