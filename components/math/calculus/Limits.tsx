"use client";

import { MathJax } from "better-react-mathjax";

export default function Limits() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Limits
      </h2>

      <div className="space-y-4 font-lora text-[10px] md:text-[16px]">
        {/* Section 1 : Limit of Variable */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            <span>1. </span>
            <span className="underline">Limit of Variable</span>
          </p>

          <div className="flex flex-col gap-2 ml-3">
            <MathJax>
              {"\\( (i)\\ x \\to a^+ \\text{ or } x \\to a+0 \\)"}
            </MathJax>
            <MathJax>
              {"\\( (ii)\\ x \\to a^- \\text{ or } x \\to a-0 \\)"}
            </MathJax>
            <MathJax>
              {
                "\\( (iii)\\ x \\to a \\) or \\( \\lim x = a \\), where the assumed value of \\( x \\) is either greater or less than \\( a \\), but \\( x \\neq a \\)"
              }
            </MathJax>
          </div>
        </section>

        {/* Section 2 : Meaning of Limit*/}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors">
          <p className="font-semibold  font-robotoMono flex flex-wrap items-center gap-1">
            <span className="no-underline">2.</span>
            <span className="underline">Meaning of Limit</span>
          </p>
          <div className="flex flex-col gap-2 ml-4 mt-2">
            <p>
              When the variable x, assuming values either greater or less than
              a, graduallyapproaches a, value of x and if these values of f(x)
              gradually approaches a finite constant l, then l is called the{" "}
              <b>
                <em>limiting value of f(x)</em>
              </b>
            </p>
            <MathJax inline>{"\\[ \\lim_{x \\to a} \\ f(x) = l\\]"}</MathJax>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ \\lim_{x \\to a} \\ f(x) = l \\quad \\text{exists if} \\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit ">
              <MathJax>
                {
                  "\\[ (i)\\lim_{x \\to a^+} f(x) \\: \\text{and} \\: \\lim_{x \\to a^-} f(x) \\: \\text{both exists}\\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit ">
              <MathJax inline>
                {"\\[ (ii)\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x)\\]"}
              </MathJax>
            </div>
          </div>
        </section>
        {/* Section 3 : Fundamental of Limit*/}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            <span>3. </span>
            <span className="underline">Fundamental Limit Theorems</span>
          </p>

          <div className="flex flex-col gap-2 ml-4">
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (i)\\lim_{x \\to a} \\: c\\cdot f(x) = c\\cdot\\lim_{x \\to a} \\  f(x), \\: \\text{where c = finite quantity} \\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (ii)\\lim_{x \\to a} \\ [f_1(x) \\pm f_2(x) \\pm \\: ...] = \\lim_{x \\to a} \\  f_1(x) \\pm \\lim_{x \\to a} \\  f_2(x) \\pm\\: ...  \\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (iii)\\lim_{x \\to a} \\ [f_1(x) \\cdot f_2(x) \\cdot \\: ...] = \\lim_{x \\to a} \\  f_1(x) \\cdot \\lim_{x \\to a} \\  f_2(x) \\cdot\\: ...  \\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (iv)\\lim_{x \\to a} \\left [\\frac{f_1(x)}{ f_2(x)} \\right] =  \\left [\\frac{\\lim_{x \\to a} f_1(x)}{\\lim_{x \\to a} f_2(x)} \\right] = \\frac{l}{m} \\: \\text{where m } \\neq 0 \\]"
                }
              </MathJax>
            </div>
          </div>
        </section>
        {/* Section 4 : Important Limits*/}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            <span>3. </span>
            <span className="underline">Important Limits </span>
          </p>

          <div className="flex flex-col gap-2 ml-4">
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (i) \\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n \\cdot a^{n-1} \\:\\text{(n = rational number)}\\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (i) \\lim_{x \\to 0} \\frac{(1+x)^n - 1}{x } = n  \\:\\text{(n = rational number)}\\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (iii) \\lim_{x \\to 0} \\frac{sin x}{x} = 1 \\:\\text{(x in radian)}\\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {"\\[ (iv) \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1 \\]"}
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {"\\[ (v) \\lim_{x \\to 0} \\frac{\\log_e (1+x)}{x} = 1\\]"}
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (vi) \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x} \\right)^x = e\\]"
                }
              </MathJax>
            </div>
            <div className="text-left w-fit">
              <MathJax inline>
                {
                  "\\[ (vii) \\lim_{x \\to 0} \\frac{a^x -1}{x}  = \\log_e a \\:\\text{(a > 0)}\\]"
                }
              </MathJax>
            </div>
          </div>
        </section>
        {/* Section 5 : L'Hopital*/}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold font-robotoMono">
            <span>4. </span>
            <span className="underline">L&apos;Hôpital&apos;s Rule</span>
          </p>

          <div className="flex flex-col gap-2 ml-4">
            <p>
              If the limit of a function results in an indeterminate form like{" "}
              <MathJax inline>{"\\( \\frac{0}{0} \\)"}</MathJax> or{" "}
              <MathJax inline>{"\\( \\frac{\\infty}{\\infty} \\)"}</MathJax>,{" "}
              <b>and if the limit of the derivatives exists</b>, then
              L’Hôpital’s Rule can be applied:
            </p>

            <div className="text-left w-fit">
              <MathJax>
                {
                  "\\[ \\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\]"
                }
              </MathJax>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
