import React from "react";
import Unlock from "./unlock";
import Achievement from "./achievement";
import Calender from "./calender";
import Customer from "./customer";
import CommunityUpdates from "./communityUpdates";

export default function Body() {
  return (
    <main className="flex flex-col gap-[3rem] pb-42 ">
      <Unlock />
      <Achievement />
      <Calender />
      <Customer />
      <CommunityUpdates />
    </main>
  );
}
