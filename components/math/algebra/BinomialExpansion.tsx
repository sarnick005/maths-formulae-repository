"use client";

import { MathJax } from "better-react-mathjax";
import Image from "next/image";

export default function MathematicalInduction() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Binomial Expansion
      </h2>

      <div className="space-y-2 font-lora text-sm md:text-base">
        {/* Section 1  */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p>
            The algebraic formula by which a binomial expression raised to a
            positive integral power can be expressed as a finite series is
            called the{" "}
            <b>
              <em>binomial theorem</em>
            </b>
            , and the resulting series is called the{" "}
            <b>
              <em>binomial expansion</em>
            </b>
            .
          </p>

          <p className="font-semibold font-robotoMono underline">
            Binomial Theorem
          </p>

          <div className="space-y-6">
            {/*  binomial theorem */}
            <MathJax>
              {
                "\\[ (a \\pm x)^n = \\sum_{r=0}^n \\binom{n}{r} \\, a^{n-r} (\\pm x)^r \\]"
              }
            </MathJax>

            {/*  (a + x)^n */}
            <div>
              <div className="hidden md:block">
                <MathJax>
                  {
                    "\\[ (a + x)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}x + \\binom{n}{2}a^{n-2}x^2 + \\cdots + \\binom{n}{r}a^{n-r}x^r + \\cdots + \\binom{n}{n}x^n \\]"
                  }
                </MathJax>
              </div>
              <div className="overflow-x-auto max-w-full block md:hidden">
                <MathJax>
                  {
                    "\\( (a + x)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}x + \\binom{n}{2}a^{n-2}x^2 + \\cdots + \\binom{n}{r}a^{n-r}x^r + \\cdots + \\binom{n}{n}x^n \\)"
                  }
                </MathJax>
              </div>
            </div>

            {/* (a - x)^n */}
            <div>
              <div className="hidden md:block">
                <MathJax>
                  {
                    "\\[ (a - x)^n = \\binom{n}{0}a^n - \\binom{n}{1}a^{n-1}x + \\binom{n}{2}a^{n-2}x^2 - \\binom{n}{3}a^{n-3}x^3 + \\cdots + (-1)^r \\binom{n}{r}a^{n-r}x^r + \\cdots + (-1)^n \\binom{n}{n}x^n \\]"
                  }
                </MathJax>
              </div>
              <div className="overflow-x-auto max-w-full block md:hidden">
                <MathJax>
                  {
                    "\\( (a - x)^n = \\binom{n}{0}a^n - \\binom{n}{1}a^{n-1}x + \\binom{n}{2}a^{n-2}x^2 - \\binom{n}{3}a^{n-3}x^3 + \\cdots + (-1)^r \\binom{n}{r}a^{n-r}x^r + \\cdots + (-1)^n \\binom{n}{n}x^n \\)"
                  }
                </MathJax>
              </div>
            </div>
          </div>

          {/* pascal's triangle */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              Pascal's Triangle
            </p>
            <p>
              The idea regarding the expansion of a binomial expression for
              non-negative integral index was first introduced by B. Pascal in
              1660. He considered the following binomial expressions (obtained
              by direct multiplication):
            </p>
            <div className="space-y-4 py-2">
              <MathJax>{"\\( (a + x)^0 = 1 \\)"}</MathJax>
              <MathJax>{"\\( (a + x)^1 = a + x \\)"}</MathJax>
              <MathJax>{"\\( (a + x)^2 = a^2 + 2ax + x^2 \\)"}</MathJax>
              <MathJax>
                {"\\( (a + x)^3 = a^3 + 3a^2x + 3ax^2 + x^3 \\)"}
              </MathJax>
              <MathJax>
                {"\\( (a + x)^4 = a^4 + 4a^3x + 6a^2x^2 + 4ax^3 + x^4 \\)"}
              </MathJax>
            </div>
            <div className="my-4">
              <Image
                src="/images/pascal-triangle.png"
                width={500}
                height={500}
                alt="Pascal's Triangle"
                className="mx-auto border-1"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
