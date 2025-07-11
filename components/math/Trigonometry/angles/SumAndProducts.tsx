import { MathJax } from "better-react-mathjax";

export default function SumAndProducts() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Sum and Products
      </h2>

      <div className="space-y-4 font-lora text-[12px] md:text-[16px]">
        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "i) \\(\\sin C + \\sin D = 2 \\sin\\left(\\frac{C + D}{2}\\right) \\cos\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "ii) \\(\\sin C - \\sin D = 2 \\cos\\left(\\frac{C + D}{2}\\right) \\sin\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "iii) \\(\\cos C + \\cos D = 2 \\cos\\left(\\frac{C + D}{2}\\right) \\cos\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "iv) \\(\\cos C - \\cos D = -2 \\sin\\left(\\frac{C + D}{2}\\right) \\sin\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors text-muted-foreground">
          <MathJax>{"\\(A > B\\)"}</MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "v) \\(\\sin A \\cos B = \\frac{1}{2} [\\sin(A + B) + \\sin(A - B)]\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vi) \\(\\cos A \\sin B = \\frac{1}{2} [\\sin(A + B) - \\sin(A - B)]\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "vii) \\(\\cos A \\cos B = \\frac{1}{2} [\\cos(A + B) + \\cos(A - B)]\\)"
            }
          </MathJax>
        </div>

        <div className="p-2 hover:bg-muted/50 rounded transition-colors">
          <MathJax>
            {
              "viii) \\(\\sin A \\sin B = \\frac{1}{2} [\\cos(A - B) - \\cos(A + B)]\\)"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
