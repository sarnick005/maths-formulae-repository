import { MathJax } from "better-react-mathjax";

export default function GeneralSolutions() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        General Solutions
      </h2>

      <div className="space-y-4 font-lora text-[10px] md:text-[16px]">
        {/* sin */}
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex gap-2">
          1.
          <MathJax>
            {"(i) If \\( \\sin\\theta = 0 \\), then \\( \\theta = n\\pi \\)"}
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(ii) If \\( \\sin\\theta = \\sin\\alpha \\), then \\( \\theta = n\\pi + (-1)^n \\alpha \\quad \\left(-\\frac{\\pi}{2} \\leq \\alpha \\leq \\frac{\\pi}{2}\\right) \\)"
            }
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(iii) If \\( \\sin\\theta = 1 \\), then \\( \\theta = (4n + 1) \\cdot \\frac{\\pi}{2} \\)"
            }
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(iv) If \\( \\sin\\theta = -1 \\), then \\( \\theta = (4n - 1) \\cdot \\frac{\\pi}{2} \\)"
            }
          </MathJax>
        </div>

        {/* cos */}
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex gap-2">
          2.
          <MathJax>
            {
              "(i) If \\( \\cos\\theta = 0 \\), then \\( \\theta = (2n + 1) \\cdot \\frac{\\pi}{2} \\)"
            }
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(ii) If \\( \\cos\\theta = \\cos\\alpha \\), then \\( \\theta = 2n\\pi \\pm \\alpha \\quad (0 \\leq \\alpha \\leq \\pi) \\)"
            }
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {"(iii) If \\( \\cos\\theta = 1 \\), then \\( \\theta = 2n\\pi \\)"}
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(iv) If \\( \\cos\\theta = -1 \\), then \\( \\theta = (2n + 1)\\pi \\)"
            }
          </MathJax>
        </div>

        {/* tan */}
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex gap-2">
          3.
          <MathJax>
            {"(i) If \\( \\tan\\theta = 0 \\), then \\( \\theta = n\\pi \\)"}
          </MathJax>
        </div>
        <div className="p-2 hover:bg-muted/50 rounded transition-colors flex ml-3">
          <MathJax>
            {
              "(ii) If \\( \\tan\\theta = \\tan\\alpha \\), then \\( \\theta = n\\pi + \\alpha \\quad \\left(-\\frac{\\pi}{2} \\leq \\alpha \\leq \\frac{\\pi}{2}\\right) \\) where n = any integer"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
