import React from "react";
import Image1 from "../../public/image/image 18.png";
import Image2 from "../../public/image/image 19.png";
import Image3 from "../../public/image/image 20.png";
import { Box2 } from "../boxs";

const contents = [
  {
    Icon: Image1,
    text: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    Icon: Image2,
    text: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    Icon: Image3,
    text: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function CommunityUpdates() {
  return (
    <div className="flex flex-col justify-center items-center px-[9rem]">
      <h2>Caring is the new marketing</h2>
      <p className="text-Regularbody2 text-grey  text-center px-60 pt-2 pb-4">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex flex-row justify-between gap-y-28 flex-wrap w-full items-center">
        {contents.map((content, index) => (
          <Box2 text={content.text} Icon={content.Icon} key={index} />
        ))}
      </div>
    </div>
  );
}
