import React from "react";
import Icon1 from "../../public/ICON/Icon.svg";
import Icon2 from "../../public/ICON/Icon1.svg";
import Icon3 from "../../public/ICON/Icon2.svg";
import { Box1 } from "../boxs";

const boxContents = [
  {
    icon: Icon1,
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Icon2,
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Icon3,
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];

export default function Community() {
  return (
    <section className=" justify-center items-center text-center px-[9rem]">
      <h2>
        Manage your entire community <br /> in a single system
      </h2>
      <p className="text-Regularbody2 text-grey pt-[0.5rem]">
        Who is Nextcent suitable for?
      </p>
      <div className="flex flex-row justify-between items-center pt-4">
        {boxContents.map((boxContent, index) => (
          <Box1
            key={index}
            text={boxContent.text}
            title={boxContent.title}
            icon={boxContent.icon}
          />
        ))}
      </div>
    </section>
  );
}
