import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "./button";

type Box1Props = { text: string; title: string; icon: StaticImageData };

export function Box1(props: Box1Props) {
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-8 rounded-lg bg-white shadow-2px w-[18.3125rem] animate-fade-left transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-gray-200">
      <div className="flex flex-col justify-start items-center gap-4 ">
        <Image src={props.icon} alt="icon" />
        <h3>{props.title}</h3>
      </div>
      <p className=" text-Regularbody3 text-grey ">{props.text}</p>
    </div>
  );
}

type Box2Props = { text: string; Icon: StaticImageData };

export function Box2(props: Box2Props) {
  return (
    <div className="relative w-[368px] h-[286px] animate-pop ">
      <Image
        width={368}
        height={286}
        src={props.Icon}
        alt="Image"
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col justify-center items-center gap-2 p-4 rounded-lg bg-silver shadow-8px h-44 w-[316px] overflow-auto absolute bottom-[-25%] left-[6%] ">
        <p className=" text-headline4 text-grey text-center">{props.text}</p>
        <Button size={"medium"} intent={"tertiary"} icontype={"arrow"}>
          Readmore
        </Button>
      </div>
    </div>
  );
}
