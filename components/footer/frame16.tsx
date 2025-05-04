import React from "react";
import Button from "../button";

export default function Frame16() {
  return (
    <section className="bg-silver">
      <div className="flex flex-col py-8 gap-8 items-center w-[80%] max-w-screen-lg mx-auto">
        <h1 className="text-center  font-semibold max-w-3xl">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <Button intent="primary" size="normal" icontype="arrow">
          Get a Demo
        </Button>
      </div>
    </section>
  );
}
