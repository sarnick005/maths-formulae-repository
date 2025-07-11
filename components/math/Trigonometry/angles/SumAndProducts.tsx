import { MathJax } from "better-react-mathjax";

export default function SumAndProducts() {
  return (
    <div>
      <div className="ml-4">
        <p className="underline font-robotoMono text-base md:text-xl font-semibold">
          Sum and Products
        </p>
        <div className="flex flex-col gap-4 mt-4 font-lora text-[12px] md:text-[16px]">
          <MathJax>
            {
              "i) \\(\\sin C + \\sin D = 2 \\sin\\left(\\frac{C + D}{2}\\right) \\cos\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
          <MathJax>
            {
              "ii) \\(\\sin C - \\sin D = 2 \\cos\\left(\\frac{C + D}{2}\\right) \\sin\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
          <MathJax>
            {
              "iii) \\(\\cos C + \\cos D = 2 \\cos\\left(\\frac{C + D}{2}\\right) \\cos\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
          <MathJax>
            {
              "iv) \\(\\cos C - \\cos D = -2 \\sin\\left(\\frac{C + D}{2}\\right) \\sin\\left(\\frac{C - D}{2}\\right)\\)"
            }
          </MathJax>
          <MathJax>{"\\(A > B\\)"}</MathJax>

          <MathJax>
            {
              "v) \\(\\sin A \\cos B = \\frac{1}{2} [\\sin(A + B) + \\sin(A - B)]\\)"
            }
          </MathJax>
          <MathJax>
            {
              "vi) \\(\\cos A \\sin B = \\frac{1}{2} [\\sin(A + B) - \\sin(A - B)]\\)"
            }
          </MathJax>
          <MathJax>
            {
              "vii) \\(\\cos A \\cos B = \\frac{1}{2} [\\cos(A + B) + \\cos(A - B)]\\)"
            }
          </MathJax>
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
