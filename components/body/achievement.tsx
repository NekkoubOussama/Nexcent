import React from "react";

import icon1 from "../../public/ICON/Icon01.svg";
import icon2 from "../../public/ICON/Icon02.svg";
import icon3 from "../../public/ICON/Icon03.svg";
import icon4 from "../../public/ICON/Icon04.svg";
import { Counts } from "../boxs";
import { SlideIn } from "../animation";

const countsContents = [
  { icon: icon1, number: "2,245,341", label: "Members" },
  { icon: icon2, number: "46,328", label: "Clubs" },
  { icon: icon3, number: "828,867", label: "Event Bookings" },
  { icon: icon4, number: "1,926,436", label: "Payments" },
];

export default function Achievement() {
  return (
    <section className="bg-silver">
      <div className="py-16 flex flex-col lg:flex-row justify-between lg:items-center w-[80%] mx-auto space-y-2.5">
        <SlideIn direction="left">
          <h2>Helping a local </h2>
          <h2 className="text-primary">business reinvent itself</h2>
          <p className="text-Regularbody2 pt-2">
            We reached here with our hard work and dedication
          </p>
        </SlideIn>
        <div className="grid sm:grid-cols-2 gap-10 p-1 grid-cols-1">
          {countsContents.map((countsContent, index) => (
            <Counts
              index={index}
              key={index}
              icon={countsContent.icon}
              Number={countsContent.number}
              Label={countsContent.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
