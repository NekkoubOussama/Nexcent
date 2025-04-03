import React from "react";
import Button from "../button";

export default function Frame16() {
  return (
    <div className="flex flex-col py-[2rem] gap-[2rem] items-center bg-silver px-[9rem] ">
      <h1 className="text-center w-[800px]">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <Button intent={"primary"} size={"normal"} icontype="arrow">
        Get a Demo
      </Button>
    </div>
  );
}
