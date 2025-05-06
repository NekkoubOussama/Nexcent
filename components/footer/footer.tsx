import React from "react";
import { Wlogo } from "../logo";
import Image from "next/image";
import Links from "../link";
import X from "../../public/Social Icons/Social Icons 2.svg";
import Instagrame from "../../public/Social Icons/Social Icons 4.svg";
import Youtube from "../../public/Social Icons/Social Icons 3.svg";
import Dribbble from "../../public/Social Icons/Social Icons 1.svg";
import Send from "../../public/ICON/send.svg";

const companyLinks = [
  { label: "About us", href: "/" },
  { label: "Blog", href: "/Contact us" },
  { label: "Contact us", href: "/Contact us" },
  { label: "Pricing", href: "/Product" },
  { label: "Testimonials", href: "/Testimonial" },
];

const supportLinks = [
  { label: "Help center ", href: "/" },
  { label: "Terms of service", href: "/Service" },
  { label: "Legal ", href: "/Feature" },
  { label: "Privacy policy", href: "/Product" },
  { label: "Status", href: "/Testimonial" },
];

const socialMedias = [
  { text: "Instagrame", link: "https://www.instagram.com/", icon: Instagrame },
  { text: "dribbble", link: "https://dribbble.com/", icon: Dribbble },
  { text: "X", link: "https://x.com/", icon: X },
  { text: "Youtube", link: "https://www.youtube.com/", icon: Youtube },
];

export default function Footer() {
  return (
    <section className="py-[4rem] text-white bg-nblack pt-30 pb-11 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[90%] mx-auto  ">
        <div className="mt-3 sm:row-start-2 sm:col-start-1 md:col-start-auto md:row-start-auto">
          <Wlogo />
          <p className="py-[2.5rem]">
            Copyright © 2020 Nexcent ltd.
            <span className="block pt-[0.5rem]">All rights reserved</span>
          </p>
          <div className="flex space-x-[1rem] flex-wrap mx-auto mb-3">
            {socialMedias.map((socialMedia, index) => (
              <Links
                key={index}
                icon={socialMedia.icon}
                text={socialMedia.text}
                link={socialMedia.link}
              />
            ))}
          </div>
        </div>
        <ul className="md:place-self-center">
          <div className="pb-[2rem] text-headline4 ">Company</div>
          {companyLinks.map((link, index) => (
            <li key={index} className="mb-1 hover:text-b-grey">
              <a href={link.href} className="text-Regularbody3 font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className=" md:place-self-center">
          <div className="text-headline4 pb-[2rem] ">Support</div>
          {supportLinks.map((link, index) => (
            <li key={index} className="mb-1 hover:text-b-grey">
              <a href={link.href} className="text-Regularbody3 font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-3 mt-3 sm:row-start-2 sm:col-start-2  md:col-start-auto md:row-start-auto ">
          <label className="text-headline4" htmlFor="Email">
            Stay up to date
          </label>
          <form action="/your-endpoint" method="POST" className="relative">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Your email address"
              required
              className="text-Regularbody3 bg-white/20 pl-[0.75rem] pr-10 pt-[0.5625rem] pb-[0.6875rem] rounded-lg w-full focus:outline focus:outline-primary "
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <Image src={Send} alt="Submit email" className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
