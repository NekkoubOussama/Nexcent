import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type linkProps = { text: string; link: string; icon: StaticImageData };
export default function Links(props: linkProps) {
  return (
    <Link
      href={props.link}
      className="transition-transform duration-[350ms] hover:ease hover:scale-125 hover:opacity-95"
    >
      <Image
        src={props.icon}
        alt={props.text}
        width={32}
        height={32}
        className=" rounded-[0.18rem] h-8 w-8"
      />
    </Link>
  );
}
