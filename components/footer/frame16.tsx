import React from "react";
import Button from "../button";
import { TypewriterText } from "../animation";

export default function Frame16() {
  return (
    <section className="bg-silver">
      <div className="flex flex-col py-8 gap-8 items-center w-[80%] max-w-screen-lg mx-auto">
        <TypewriterText text="Pellentesque suscipit fringilla libero eu." />
        <Button intent="primary" size="normal" icontype="arrow">
          Get a Demo
        </Button>
      </div>
    </section>
  );
}
