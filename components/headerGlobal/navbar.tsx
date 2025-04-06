import React from "react";
import { Blogo } from "../logo";
import Button from "../button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/Service" },
  { label: "Feature", href: "/Feature" },
  { label: "Product", href: "/Product" },
  { label: "Testimonial", href: "/Testimonial" },
  { label: "FAQ", href: "/FAQ" },
];
export default function Header() {
  return (
    <header className="flex items-center justify-between px-[6.5625rem] pt-[1.875rem] pb-[0.875rem] fixed top-0 left-0 right-0 z-50 bg-white  ">
      <Blogo />
      <div className="flex items-center justify-center gap-[3.125rem]">
        <ul className="flex items-center justify-center gap-[3.125rem] ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="group relative text-Mediumbody2 text-secondary p-[0.25rem]"
              >
                {link.label}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[0.075rem] bg-gray-900 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end gap-[0.875rem]">
        <Button intent={"tertiary"} size={"medium"}>
          Login
        </Button>
        <Button intent={"primary"} size={"medium"}>
          Sign up
        </Button>
      </div>
    </header>
  );
}
