"use client";

import { MathJax } from "better-react-mathjax";
import Image from "next/image";

export default function BinomialExpansion() {
  return (
    <div className="space-y-6 max-w-full overflow-hidden">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Binomial Expansion
      </h2>

      <div className="space-y-2 font-lora md:text-base">
        {/* Section 1: Introduction */}
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

          {/* Binomial Theorem */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              Binomial Theorem
            </p>
            <p className="mb-2">
              For any positive integer n and real numbers a and x:
            </p>
            <MathJax>
              {
                "\\[ (a \\pm x)^n = \\sum_{r=0}^n \\binom{n}{r} \\, a^{n-r} (\\pm x)^r \\]"
              }
            </MathJax>
          </div>

          {/* Binomial Coefficient Formula */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              Binomial Coefficient
            </p>
            <p className="mb-2">The binomial coefficient is defined as:</p>
            <MathJax>
              {
                "\\[ \\binom{n}{r} = \\frac{n!}{r!(n-r)!} \\quad \\text{where } 0 \\leq r \\leq n \\]"
              }
            </MathJax>
            <div className="text-muted-foreground mt-2">
              <MathJax>
                {
                  "\\( \\text{Note: }\\binom{n}{r} \\; \\equiv \\; C(n,r) \\; \\equiv \\, ^nC_r \\)"
                }
              </MathJax>
            </div>
          </div>

          {/* Expanded Forms */}
          <div className="space-y-6">
            <p className="font-semibold font-robotoMono underline mt-4">
              Expanded Forms
            </p>

            {/* (a + x)^n */}
            <div>
              <p className="mb-2">
                For <em>(a + x)ⁿ</em>:
              </p>
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
              <p className="mb-2">
                For <em>(a - x)ⁿ</em>:
              </p>
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

          {/* Pascal's Triangle */}
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
            <div className="space-y-2 py-2">
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
                alt="Pascal's Triangle showing binomial coefficients"
                className="mx-auto border-1"
              />
            </div>
            <p>
              The above table showing the pattern of coefficients in the
              binomial expansions for non-negative integral index is known as{" "}
              <b>
                <em>Pascal's Triangle</em>
              </b>
              . Each entry is the sum of the two entries above it.
            </p>
          </div>

          {/* General Term */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              General Term of (a + x)ⁿ
            </p>
            <p>
              The (r + 1)th term in the expansion of (a + x)ⁿ is denoted by{" "}
              <b>
                <em>
                  T<sub>r+1</sub>
                </em>
              </b>
              :
            </p>
            <MathJax>{"\\[ T_{r+1} = \\binom{n}{r} a^{n-r}x^r \\]"}</MathJax>
            <p className="text-muted-foreground mt-2">
              Note: r ranges from 0 to n, so there are (n + 1) terms in total.
            </p>
          </div>

          {/* Properties of Binomial Coefficients */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              Properties of Binomial Coefficients
            </p>
            <div className="space-y-3 mt-2">
              <div>
                <p>
                  (i) <strong>Symmetry Property:</strong>
                </p>
                <MathJax>{"\\[ \\binom{n}{r} = \\binom{n}{n-r} \\]"}</MathJax>
              </div>
              <div>
                <p>
                  (ii) <strong>Sum of all binomial coefficients:</strong>
                </p>
                <MathJax>
                  {"\\[ \\sum_{r=0}^{n} \\binom{n}{r} = 2^n \\]"}
                </MathJax>
              </div>
              <div>
                <p>
                  (iii){" "}
                  <strong>
                    Sum of coefficients at odd and even positions:
                  </strong>
                </p>
                <p className="ml-4">
                  Sum of coefficients of odd terms = Sum of coefficients of even
                  terms = 2<sup>n-1</sup>
                </p>
              </div>
              <div>
                <p>
                  (iv) <strong>Pascal's Identity:</strong>
                </p>
                <MathJax>
                  {
                    "\\[ \\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r} \\]"
                  }
                </MathJax>
              </div>
            </div>
          </div>

          {/* Middle Terms */}
          <div>
            <p className="font-semibold font-robotoMono underline mt-4">
              Middle Terms
            </p>
            <div className="space-y-3 mt-2">
              <div>
                <p>
                  (i) When n is <strong>even</strong>, there is one middle term:
                </p>
                <MathJax>
                  {
                    "\\[ \\left( \\frac{n}{2} + 1 \\right)^{\\text{th}} \\text{ term} \\]"
                  }
                </MathJax>
              </div>
              <div>
                <p>
                  (ii) When n is <strong>odd</strong>, there are two middle
                  terms:
                </p>
                <MathJax>
                  {
                    "\\[ \\left( \\frac{n+1}{2} \\right)^{\\text{th}} \\text{ term and } \\left( \\frac{n+3}{2} \\right)^{\\text{th}} \\text{ term} \\]"
                  }
                </MathJax>
              </div>
            </div>
          </div>

          {/* greatest terms */}
          <div className="mb-4">
            <p className="font-semibold font-robotoMono underline mt-4 mb-6">
              Greatest Term
            </p>

            <div className="space-y-8">
              <div>
                {/* Desktop view */}
                <div className="hidden md:block">
                  <MathJax>
                    {
                      "\\[ \\text{If } \\; \\frac{(n+1)x}{a+x} = m, \\; m \\in \\mathbb{Z}^+, \\; \\text{then the greatest term is } m^{\\text{th}} \\; \\text{or } (m+1)^{\\text{th}} \\; \\text{term.} \\]"
                    }
                  </MathJax>
                </div>
                {/* Mobile view */}
                <div className="block md:hidden overflow-x-auto max-w-full px-1">
                  <MathJax>
                    {
                      "\\( \\text{If } \\; \\frac{(n+1)x}{a+x} = m, \\; m \\in \\mathbb{Z}^+, \\; \\text{then the greatest term is } m^{\\text{th}} \\; \\text{or } (m+1)^{\\text{th}} \\; \\text{term.} \\)"
                    }
                  </MathJax>
                </div>
              </div>
              <div>
                {/* Desktop view */}
                <div className="hidden md:block">
                  <MathJax>
                    {
                      "\\[ \\text{If } \\; \\frac{(n+1)x}{a+x} = m + \\text{(a positive proper fraction)}, \\; m \\in \\mathbb{Z}^+, \\; \\text{then the greatest term is } (m+1)^{\\text{th}} \\; \\text{term.} \\]"
                    }
                  </MathJax>
                </div>
                {/* Mobile view */}
                <div className="block md:hidden overflow-x-auto max-w-full px-1">
                  <MathJax>
                    {
                      "\\( \\text{If } \\; \\frac{(n+1)x}{a+x} = m + \\text{(a positive proper fraction)}, \\; m \\in \\mathbb{Z}^+, \\; \\text{then the greatest term is } (m+1)^{\\text{th}} \\; \\text{term.} \\)"
                    }
                  </MathJax>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
