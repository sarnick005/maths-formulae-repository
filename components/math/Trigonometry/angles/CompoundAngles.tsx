import { MathJax } from "better-react-mathjax";

export default function CompoundAngles() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Compound Angles
      </h2>

      <div className="space-y-4 font-lora text-[10px] md:text-[16px]">
        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"i) \\(\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B\\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"ii) \\(\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B\\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iii) \\(\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B\\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iv) \\(\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B\\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "v) \\(\\sin(A + B) \\sin(A - B) = \\sin^2 A - \\sin^2 B = \\cos^2 B - \\cos^2 A\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vi) \\(\\cos(A + B) \\cos(A - B) = \\cos^2 A - \\sin^2 B = \\cos^2 B - \\sin^2 A\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vii) \\(\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "viii) \\(\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "ix) \\(\\cot(A + B) = \\frac{\\cot A \\cot B - 1}{\\cot B + \\cot A}\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "x) \\(\\cot(A - B) = \\frac{\\cot A \\cot B + 1}{\\cot B - \\cot A}\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
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
