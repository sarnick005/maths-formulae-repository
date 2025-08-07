"use client";

import { MathJax } from "better-react-mathjax";

export default function Logarithm() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Logarithm
      </h2>

      <div className="space-y-2 font-lora text-sm md:text-base">
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <div className="pl-3 space-y-3">
            <p>
              If <em>M</em> &gt; 0, <em>N</em> &gt; 0, <em>a</em> &gt; 0,{" "}
              <em>b</em> &gt; 0 and <em>a ≠ 1</em>, <em>b ≠ 1</em>, and{" "}
              <em>n</em> is any real number, then:
            </p>

            <MathJax>{"\\( \\text{(i) } \\log_a 1 = 0 \\)"}</MathJax>
            <MathJax>{"\\( \\text{(ii) } \\log_a a = 1 \\)"}</MathJax>
            <MathJax>{"\\( \\text{(iii) } a^{\\log_a M} = M \\)"}</MathJax>
            <MathJax>
              {
                "\\( \\text{(iv) } \\log_a (M \\cdot N) = \\log_a M + \\log_a N \\)"
              }
            </MathJax>
            <MathJax>
              {
                "\\( \\text{(v) } \\log_a \\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N \\)"
              }
            </MathJax>
            <MathJax>
              {"\\( \\text{(vi) } \\log_a M^n = n \\cdot \\log_a M \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(vii) } \\log_a M = \\log_b M \\cdot \\log_a b \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(viii) } \\log_b a \\cdot \\log_a b = 1 \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(ix) } \\log_b a = \\frac{1}{\\log_a b} \\)"}
            </MathJax>
            <MathJax>
              {"\\( \\text{(x) } \\log_b M = \\frac{\\log_a M}{\\log_a b} \\)"}
            </MathJax>
          </div>
        </section>
      </div>
    </div>
  );
}
