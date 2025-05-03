import React from "react";
import Image from "next/image";
import Logo1 from "../../public/Clients/Logo(5).svg";
import Logo2 from "../../public/Clients/Logo(6).svg";
import Logo3 from "../../public/Clients/Logo(7).svg";
import Logo4 from "../../public/Clients/Logo(8).svg";
import Logo5 from "../../public/Clients/Logo(9).svg";
import Logo6 from "../../public/Clients/Logo(10).svg";
import Logo7 from "../../public/Clients/Logo(11).svg";

const clientsIcons = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

export default function Clients() {
  return (
    <section className="my-[2.5rem] justify-center items-center text-center w-[80%] mx-auto ">
      <h2>Our Clients</h2>
      <p className="text-Regularbody2 text-grey pt-[0.5rem]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="mt-[1rem] py-[2rem]">
        <div className="scroll-container">
          <div className="scroll-content">
            {clientsIcons.map((clientsIcon, index) => (
              <div key={index} className="scroll-item">
                <Image src={clientsIcon} alt={`Client ${index}`} />
              </div>
            ))}
            {/* Duplicate logos for infinite loop */}
            {clientsIcons.map((clientsIcon, index) => (
              <div key={index + clientsIcons.length} className="scroll-item">
                <Image
                  src={clientsIcon}
                  alt={`Client ${index + clientsIcons.length}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
