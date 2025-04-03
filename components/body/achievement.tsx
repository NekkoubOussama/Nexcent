import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import icon1 from "../../public/ICON/Icon01.svg";
import icon2 from "../../public/ICON/Icon02.svg";
import icon3 from "../../public/ICON/Icon03.svg";
import icon4 from "../../public/ICON/Icon04.svg";

type countsprops = { icon: StaticImageData; Number: string; Label: string };

function Counts(props: countsprops) {
  return (
    <div className="flex flex-row gap-4 pr-10">
      <Image src={props.icon} alt="Icon" />
      <div>
        <h3 className="text-d_grey">{props.Number}</h3>
        <p className="text-grey text-Regularbody2">{props.Label}</p>
      </div>
    </div>
  );
}

const countsContents = [
  { icon: icon1, number: "2,245,341", label: "Members" },
  { icon: icon2, number: "46,328", label: "Clubs" },
  { icon: icon3, number: "828,867", label: "Event Bookings" },
  { icon: icon4, number: "1,926,436", label: "Payments" },
];

export default function Achievement() {
  return (
    <div className="py-16 flex flex-row justify-between items-center bg-silver px-[9rem]">
      <div>
        <h2>Helping a local </h2>
        <h2 className="text-primary">business reinvent itself</h2>
        <p className="text-Regularbody2 pt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 p-1">
        {countsContents.map((countsContent, index) => (
          <Counts
            key={index}
            icon={countsContent.icon}
            Number={countsContent.number}
            Label={countsContent.label}
          />
        ))}
      </div>
    </div>
  );
}
