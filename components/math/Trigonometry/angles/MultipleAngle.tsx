import { MathJax } from "better-react-mathjax";

export default function MultipleAngle() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Multiple Angles
      </h2>

      <div className="space-y-4 font-lora text-[12px] md:text-[16px]">
        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"i) \\( \\sin(2\\theta) = 2 \\sin\\theta \\cos\\theta \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "ii) \\( \\sin(2\\theta) = \\frac{2 \\tan\\theta}{1 + \\tan^2\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iii) \\( \\cos(2\\theta) = 2 \\cos^2\\theta - 1 \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"iv) \\( \\cos(2\\theta) = 1 - 2 \\sin^2\\theta \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "v) \\( \\cos(2\\theta) = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vi) \\( \\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"vii) \\( \\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"viii) \\( \\sin(3\\theta) = 3\\sin\\theta - 4\\sin^3\\theta \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {"ix) \\( \\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta \\)"}
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "x) \\( \\tan(3\\theta) = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta} \\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "xi) \\( \\tan^2\\theta = \\frac{1 - \\cos(2\\theta)}{1 + \\cos(2\\theta)} \\)"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
