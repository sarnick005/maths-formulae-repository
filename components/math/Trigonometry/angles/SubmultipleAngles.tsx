import { MathJax } from "better-react-mathjax";

export default function SubMultipleAngle() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Submultiple Angles
      </h2>

      <div className="space-y-4 font-lora text-[12px] md:text-[16px]">
        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "i) \\( \\sin\\theta = 2 \\sin\\frac{\\theta}{2} \\cos\\frac{\\theta}{2} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "ii) \\( \\sin\\theta = \\frac{2 \\tan\\frac{\\theta}{2}}{1 + \\tan^2\\frac{\\theta}{2}} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iii) \\( \\cos\\theta = 2 \\cos^2\\frac{\\theta}{2} - 1 \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iv) \\( \\cos\\theta = 1 - 2 \\sin^2\\frac{\\theta}{2} \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "v) \\( \\cos\\theta = \\frac{1 - \\tan^2\\frac{\\theta}{2}}{1 + \\tan^2\\frac{\\theta}{2}} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vi) \\( \\cos\\theta = \\cos^2\\frac{\\theta}{2} - \\sin^2\\frac{\\theta}{2} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vii) \\( \\tan\\theta = \\frac{2\\tan\\frac{\\theta}{2}}{1 - \\tan^2\\frac{\\theta}{2}} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "viii) \\( \\tan^2\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{1 + \\cos\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "ix) \\( \\sin\\theta = 3\\sin\\frac{\\theta}{3} - 4\\sin^3\\frac{\\theta}{3} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "x) \\( \\cos\\theta = 4\\cos^3\\frac{\\theta}{3} - 3\\cos\\frac{\\theta}{3} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xi) \\( \\tan(3\\theta) = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xii) \\( \\sin 18^{\\circ} = \\cos 72^{\\circ} = \\frac{\\sqrt{5} - 1}{4} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xiii) \\( \\sin 54^{\\circ} = \\cos 36^{\\circ} = \\frac{\\sqrt{5} + 1}{4} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xiv) \\( \\sin 36^{\\circ} = \\cos 54^{\\circ} = \\frac{\\sqrt{10 - 2\\sqrt{5}}}{4} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xv) \\( \\sin 72^{\\circ} = \\cos 18^{\\circ} = \\frac{\\sqrt{10 + 2\\sqrt{5}}}{4} \\)"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
