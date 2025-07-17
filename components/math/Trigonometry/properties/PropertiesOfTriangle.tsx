import { MathJax } from "better-react-mathjax";
import CircumCircleTriangle from "./Triangle";

export default function PropertiesOFTriangle() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Properties
      </h2>

      <div className="space-y-2 font-lora text-[11px] sm:text-[16px]">
        {/* triangle diagram */}
        <div className="p-1 hover:bg-muted/50 rounded transition-colors">
          <CircumCircleTriangle />
        </div>

        <div className="p-1 hover:bg-muted/50 rounded transition-colors flex ml-2">
          <MathJax>
            {
              " \\(1) \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\)"
            }
          </MathJax>
        </div>
        <div className="p-1 hover:bg-muted/50 rounded transition-colors flex ml-2">
          <MathJax>
            {
              "\\[2)\\: a = b \\cdot \\cos C + c \\cdot \\cos B \\] \\[ \\quad b = c \\cdot \\cos A + a \\cdot \\cos C \\]\\[ \\quad c = a \\cdot \\cos B + b \\cdot \\cos A \\]"
            }
          </MathJax>
        </div>
        <div className="p-1 hover:bg-muted/50 rounded transition-colors flex ml-2">
          <MathJax>
            {
              "\\[3)\\: a^2 = b^2 + c^2 -2bc\\cdot \\cos A \\implies \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\] \\[ \\quad b^2 = c^2 + a^2 -2ca\\cdot \\cos B \\implies \\cos B = \\frac{c^2 + a^2 - b^2}{2ca} \\]\\[ \\quad c^2 = a^2 + b^2 -2ab\\cdot \\cos C \\implies \\cos C = \\frac{a^2 + b^2 - c^2}{2ab} \\]"
            }
          </MathJax>
        </div>
        <div className="p-1 hover:bg-muted/50 rounded transition-colors flex ml-2">
          <MathJax>
            {
              "\\[4)\\: \\tan A = \\frac{abc}{R}\\cdot \\frac{1}{b^2 + c^2 - a^2}\\] \\[ \\quad \\tan B = \\frac{abc}{R}\\cdot \\frac{1}{c^2 + a^2 - b^2} \\]\\[ \\quad \\tan C = \\frac{abc}{R}\\cdot \\frac{1}{a^2 + b^2 - c^2} \\]"
            }
          </MathJax>
        </div>
      </div>
    </div>
  );
}
