"use client";

import { MathJax } from "better-react-mathjax";

const CaseLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-100 text-gray-800 rounded-sm px-1 py-0.5 text-sm font-medium">
    {children}
  </span>
);

export default function Quadratic() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Quadratic Equation
      </h2>

      <div className="space-y-2 font-lora text-sm md:text-base">
        {/* Section 1 : Quadratic Equation  */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold font-robotoMono">
            <span>1. </span>
            <span className="underline">Basics</span>
          </p>

          <div className="flex flex-col gap-2 pl-4 mt-2 ml-3">
            <p>
              (I) If α is a root of{" "}
              <b>
                <em>ax² + bx + c = 0</em>
              </b>{" "}
              then (x − α) is a factor of{" "}
              <b>
                <em>ax² + bx + c = 0</em>
              </b>{" "}
              and vice-versa.
            </p>
            <p>(II) A quadratic equation has only two roots.</p>
          </div>

          <div className="pl-5">
            <p>
              (III) If two roots of <em>ax² + bx + c = 0</em> are α and β, then
            </p>

            <div className="pl-6">
              <MathJax>
                {
                  "\\(\\text{(a)}\\ \\alpha + \\beta = -\\frac{b}{a} \\quad \\text{(b)}\\ \\alpha \\cdot \\beta = \\frac{c}{a}\\)"
                }
              </MathJax>
            </div>
          </div>

          <div className="pl-5">
            <p>
              (IV) If the roots of a quadratic equation are α and β, then the
              quadratic equation is
            </p>
            <MathJax>
              {"\\[x^2 - (\\alpha + \\beta)x + \\alpha \\cdot \\beta = 0\\]"}
            </MathJax>
          </div>

          <div className="pl-5">
            <p className="mb-1">
              (V) <u>Sridharacharya formula</u>
            </p>
            <div className="pl-3 space-y-2">
              <p>If α and β are the roots of ax² + bx + c = 0, then:</p>
              <MathJax>
                {
                  "\\( \\alpha = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}, \\quad \\beta = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a} \\)"
                }
              </MathJax>
              <p>
                where a, b, c are constants and rational numbers, and (b² − 4ac)
                is the discriminant.
              </p>
              <div>
                <p>(i) b² − 4ac &gt; 0 → α and β are real and distinct</p>
                <p>(ii) b² − 4ac = 0 → α and β are real and equal</p>
                <p>(iii) b² − 4ac &lt; 0 → α and β are imaginary</p>
                <p>
                  (iv) b² − 4ac is a positive perfect square → α and β are real,
                  rational, and unequal
                </p>
                <p>
                  (v) b² − 4ac is positive but not a perfect square → α and β
                  are real, irrational, and unequal
                </p>
              </div>
            </div>
          </div>
          <div className="pl-5">
            <p>
              (VI) In a quadratic equation with real coefficients, imaginary
              roots occur in conjugate paris(α + iβ and α - iβ)
            </p>
          </div>
          <div className="pl-5">
            <p>
              (VI) In a quadratic equation with rational coefficients,
              irrational roots occur in conjugate pairs (p + √q and p − √q)
            </p>
          </div>
        </section>

        {/* Section 2 : Special Cases */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold font-robotoMono">
            <span>2. </span>
            <span className="underline">
              Roots of a quadratic equation when one or more coefficients are
              zero
            </span>
          </p>
          <div className="pl-5 space-y-2">
            <p>
              <CaseLabel>Case-I</CaseLabel>&nbsp;If c = 0 then
            </p>
            <MathJax className="pl-3">
              {"\\( x = 0 \\quad \\text{or} \\quad x = -\\frac{b}{a} \\)"}
            </MathJax>

            <p>
              <CaseLabel>Case-II</CaseLabel>&nbsp;If b = 0 then
            </p>
            <MathJax className="pl-3">
              {"\\( x = \\pm \\sqrt{\\frac{-c}{a}} \\)"}
            </MathJax>

            <p>
              <CaseLabel>Case-III</CaseLabel>&nbsp;If a = 0 then
            </p>
            <MathJax className="pl-3">{"\\( x = -\\frac{c}{b} \\)"}</MathJax>

            <p>
              <CaseLabel>Case-IV</CaseLabel>&nbsp;If a = b = 0 then
            </p>
            <MathJax className="pl-3">
              {"\\( x = \\frac{1}{0} \\quad \\text{(undefined)} \\)"}
            </MathJax>

            <p>
              <CaseLabel>Case-V</CaseLabel>&nbsp;If a = c = 0 then one root is 0
              and other is indeterminate
            </p>

            <p>
              <CaseLabel>Case-VI</CaseLabel>&nbsp;If b = c = 0 then x = 0, 0
            </p>
          </div>
        </section>

        {/* Section 3 : Complex Roots */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold font-robotoMono">
            <span>3. </span>
            <span className="underline">
              Complex Roots of a Quadratic Equation
            </span>
          </p>
          <div className="pl-4">
            <p>
              The complex roots of a quadratic equation ax² + bx + c = 0 are:
            </p>
            <MathJax className="pl-3">
              {"\\[ x = \\frac{-b \\pm i\\cdot\\sqrt{4ac-b^2 }}{2a} \\]"}
            </MathJax>
          </div>
        </section>
      </div>
    </div>
  );
}
