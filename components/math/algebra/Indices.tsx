"use client";

import { MathJax } from "better-react-mathjax";

export default function Indices() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Indices
      </h2>

      <div className="space-y-2 font-lora text-sm md:text-base">
        {/* Section: Laws of Indices */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <div className="pl-3 space-y-3">
            <p>
              If <em>a</em> and <em>b</em> are two non-zero real numbers, then
              for all rational values of <em>m</em> and <em>n</em>, we have:
            </p>

            <MathJax>{"\\( \\text{(i) } a^m \\cdot a^n = a^{m+n} \\)"}</MathJax>
            <MathJax>
              {"\\( \\text{(ii) } \\frac{a^m}{a^n} = a^{m - n} \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(iii) } (a^m)^n = a^{m \\cdot n} \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(iv) } a^0 = 1 \\quad (a \\neq 0) \\)"}
            </MathJax>
            <MathJax>{"\\( \\text{(v) } a^{-n} = \\frac{1}{a^n} \\)"}</MathJax>
            <MathJax>
              {"\\( \\text{(vi) } a^{\\frac{m}{n}} = \\sqrt[n]{a^m} \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(vii) } (a \\cdot b)^m = a^m \\cdot b^m \\)"}
            </MathJax>
            <MathJax>
              {
                "\\( \\text{(viii) } \\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m} \\)"
              }
            </MathJax>
            <MathJax>
              {
                "\\( \\text{(ix) If } a^m = b^m, \\text{ then } a = b \\text{ (if } m \\neq 0) \\)"
              }
            </MathJax>
            <MathJax>
              {
                "\\( \\text{(x) If } a^m = b^n, \\text{ then } m = n \\text{ when } a \\neq 0, \\pm1 \\)"
              }
            </MathJax>
          </div>
        </section>
      </div>
    </div>
  );
}
