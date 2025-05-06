import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type linkProps = { text: string; link: string; icon: StaticImageData };
export default function Links(props: linkProps) {
  return (
    <Link
      href={props.link}
      className="transition-transform duration-[350ms] ease-in-out hover:ease hover:scale-125 hover:opacity-95 "
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

type LinkButtonProps = {
  link: string;
  children: ReactNode;
  className?: string;
};
export function LinkButton({ link, children, className }: LinkButtonProps) {
  return (
    <Link
      href={link}
      className={`inline-block bg-primary hover:bg-shade1 text-white border-transparent font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.7)] hover:border hover:translate-x-[-3px] hover:translate-y-[-3px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-nonehover:bg-shade1 hover:border-[#4d4d4d] focus:border-d_grey active:bg-shade1  ${className}`}
    >
      {children}
    </Link>
  );
}
