import React from "react";
import Image from "next/image";
import Button from "../button";
import Picture from "../../public/Picture.png";
import Logo1 from "../../public/Clients/Logo(5).svg";
import Logo2 from "../../public/Clients/Logo(6).svg";
import Logo3 from "../../public/Clients/Logo(7).svg";
import Logo4 from "../../public/Clients/Logo(8).svg";
import Logo5 from "../../public/Clients/Logo(9).svg";
import Logo6 from "../../public/Clients/Logo(10).svg";

const clientsIcons = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

export default function Customer() {
  return (
    <section className="bg-silver">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-19 bg-silver py-8 w-[80%] mx-auto">
        <Image src={Picture} alt={"Image"} />
        <div className=" max-w-[748px] w-full">
          <p className="text-Mediumbody2 text-grey ">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-headline4 text-primary pt-4 pb-2">Tim Smith</p>
          <p className="text-Regularbody2 text-l_grey">
            British Dragon Boat Racing Association
          </p>
          <div className="flex flex-row flex-wrap gap-8 pt-8 items-center justify-between w-auto">
            <div className=" justify-between items-center flex gap-7 flex-wrap ">
              {clientsIcons.map((clientsIcon, index) => (
                <Image key={index} src={clientsIcon} alt={clientsIcon} />
              ))}
            </div>
            <Button size={"medium"} intent={"tertiary"} icontype={"arrow"}>
              Meet all customers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
