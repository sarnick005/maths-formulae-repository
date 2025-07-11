"use client";

import { MathJax } from "better-react-mathjax";

export default function BasicFunctions() {
  return (
    <div className="flex flex-col font-lora text-lg md:text-xl md:flex-row md:gap-16">
      <div className="flex flex-col gap-4">
        <p className="underline font-robotoMono">Basic Functions</p>
        <MathJax>i) {"sinθ = \\(\\frac{AB}{AC}\\)"}</MathJax>
        <MathJax>ii) {"cosθ = \\(\\frac{BC}{AC}\\)"}</MathJax>
        <MathJax>
          iii) {"tanθ = \\(\\frac{\\sinθ}{\\cosθ}\\) = \\(\\frac{AB}{BC}\\)"}
        </MathJax>
        <MathJax>
          iv) {"cotθ = \\(\\frac{1}{\\tanθ}\\) = \\(\\frac{BC}{AB}\\)"}
        </MathJax>
        <MathJax>
          v) {"cosecθ = \\(\\frac{1}{\\sinθ}\\) = \\(\\frac{AC}{AB}\\)"}
        </MathJax>
        <MathJax>
          vi) {"secθ = \\(\\frac{1}{\\cosθ}\\) = \\(\\frac{AC}{BC}\\)"}
        </MathJax>
      </div>

      <div className="mt-4 md:mt-0 flex flex-col gap-2 font-lora">
        <p className="underline font-robotoMono">Basic Formulae</p>
        <MathJax>i) {"\\( \\ sin^2\\theta + \\ cos^2\\theta = 1 \\)"}</MathJax>
        <MathJax>ii) {"\\( \\ sec^2\\theta - \\ tan^2\\theta = 1 \\)"}</MathJax>
        <MathJax>iii) {"\\( \\ cosec^2\\theta - \\ cot^2\\theta = 1 \\)"}</MathJax>
      </div>
    </div>
  );
}
