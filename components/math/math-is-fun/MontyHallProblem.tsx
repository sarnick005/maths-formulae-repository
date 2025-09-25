"use client";

import { MathJax } from "better-react-mathjax";
import Image from "next/image";

export default function MontyHallProblem() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Monty Hall Problem
      </h2>

      <div className="space-y-4 font-lora text-[14px] md:text-[16px]">
        {/* Section 1 : Problem Statement */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            <span className="underline">Problem Statement</span>
          </p>
          <p>
            You are a contestant on a game show with three doors: behind one
            door is a car, and behind the other two are goats. You select one
            door, say Door 1. The host, who knows what is behind each door, then
            opens another door, say Door 3, revealing a goat, and asks if you
            want to switch your choice to the remaining unopened door, Door 2.
            Should you stick with your original choice or switch, and which
            option gives you a higher chance of winning the car?
          </p>
          <div>
            <Image
              src="/images/monty-hall-problem.png"
              width={500}
              height={500}
              alt="Picture of the monty hall problem"
              className="object-contain mx-auto border-2"
            />
          </div>
          <div className="flex flex-col gap-2 ml-3">

          </div>
        </section>
        {/* Section 2 : Problem Solution */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            {/* <span className="underline">Solution</span> */}
          </p>
          <p>
           
          </p>
          {/* <div>
            <Image
              src="/images/monty-hall-problem.png"
              width={500}
              height={500}
              alt="Picture of the monty hall problem"
              className="object-contain mx-auto border-2"
            />
          </div> */}
          <div className="flex flex-col gap-2 ml-3">

          </div>
        </section>
      </div>
    </div>
  );
}
