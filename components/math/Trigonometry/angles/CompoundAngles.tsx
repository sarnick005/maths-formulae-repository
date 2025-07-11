import { MathJax } from "better-react-mathjax";

export default function CompoundAngles() {
  return (
    <div>
      <div className="ml-4">
        <p className="underline font-robotoMono text-base md:text-xl font-semibold">
          Compound Angles
        </p>
        <div className="flex flex-col gap-4 mt-4 font-lora text-[11px] md:text-[16px]">
          <MathJax>
            {"i) \\(\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B\\)"}
          </MathJax>
          <MathJax>
            {"ii) \\(\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B\\)"}
          </MathJax>
          <MathJax>
            {"iii) \\(\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B\\)"}
          </MathJax>
          <MathJax>
            {"iv) \\(\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B\\)"}
          </MathJax>
          <MathJax>
            {
              "v) \\(\\sin(A + B) \\sin(A - B) = \\sin^2 A - \\sin^2 B = \\cos^2 B - \\cos^2 A\\)"
            }
          </MathJax>
          <MathJax>
            {
              "vi) \\(\\cos(A + B) \\cos(A - B) = \\cos^2 A - \\sin^2 B = \\cos^2 B - \\sin^2 A\\)"
            }
          </MathJax>
          <MathJax>
            {
              "vii) \\(\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}\\)"
            }
          </MathJax>
          <MathJax>
            {
              "viii) \\(\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}\\)"
            }
          </MathJax>
          <MathJax>
            {
              "ix) \\(\\cot(A + B) = \\frac{\\cot A \\cot B - 1}{\\cot B + \\cot A}\\)"
            }
          </MathJax>
          <MathJax>
            {
              "x) \\(\\cot(A - B) = \\frac{\\cot A \\cot B + 1}{\\cot B - \\cot A}\\)"
            }
          </MathJax>
          <MathJax>
            {
              "xi) \\(\\tan(A + B + C) = \\frac{\\tan A + \\tan B + \\tan C - \\tan A \\tan B \\tan C}{1 - \\tan A \\tan B - \\tan B \\tan C - \\tan C \\tan A}\\)"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
