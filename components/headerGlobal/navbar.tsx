"use client";
import React, { useEffect, useState } from "react";
import { Blogo } from "../logo";
import Button from "../button";
import clsx from "clsx";
import { AlignLeft, X } from "lucide-react";
import NavbarM from "./navbarM";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/Service" },
  { label: "Feature", href: "/Feature" },
  { label: "Product", href: "/Product" },
  { label: "Testimonial", href: "/Testimonial" },
  { label: "FAQ", href: "/FAQ" },
];
export default function Header() {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      const isAtBottom = windowHeight + scrollY + 1 >= documentHeight;

      setNavBg(!isAtBottom && scrollY >= 95);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={clsx(
        "pt-[1.5rem] pb-[1.2rem] w-full transition-all duration-200 fixed top-0 left-0 right-0 z-50 bg-white ",
        navBg ? " backdrop-blur shadow-md " : ""
      )}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-3 ">
          <AlignLeft
            size={35}
            className={clsx(
              "text-[#263238] cursor-pointer lg:hidden",
              open ? "hidden" : " block"
            )}
            onClick={() => setOpen(true)}
          />
          <X
            size={35}
            className={clsx(
              "text-[#263238] cursor-pointer lg:hidden",
              open ? "block" : "hidden"
            )}
            onClick={() => setOpen(false)}
          />
          <Blogo />
        </div>
        <ul className="flex items-center space-x-8 justify-center max-lg:hidden p-1">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="group relative text-Mediumbody2 text-secondary p-1 "
              >
                {link.label}
                <div className="absolute top-[3.3rem] left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end gap-[0.875rem]">
          <Button intent={"tertiary"} size={"medium"}>
            Login
          </Button>
          <Button intent={"primary"} size={"medium"} className="max-lg:hidden ">
            Sign up
          </Button>
        </div>
      </div>
      <div>
        <NavbarM open={open} />
      </div>
    </header>
  );
}
